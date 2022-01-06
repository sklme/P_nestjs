import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ClassValidationPipe,
  joiSchema,
  JoiValidationPipe,
} from 'src/pipes/myValidatePipe';
import {
  ClassCustomPipeDto,
  CustomPipeDto,
  IDSubRouteDto,
  IntersectionMappedTypeDto,
  MappedTypeDto,
  OmitMappedTypeDto,
  PartialMappedTypeDto,
  PickMappedTypeDto,
} from './dto/pipe.dto';
import { PipeService } from './pipe.service';

@Controller('pipe')
export class PipeController {
  constructor(public pipeSerivce: PipeService) {}

  @Get('built-in')
  builtIn(@Query('id', ParseIntPipe) id: number) {
    //
    return this.pipeSerivce.handleNumber(id);
  }

  /**
   * pipe可以传入一个类，用IOC的方式实例化
   * 也可以传入一个定制化的示例
   */
  @Get('built-in-instance')
  builtInInstance(
    @Query(
      'id',
      new ParseIntPipe({
        // errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        exceptionFactory() {
          return new HttpException(
            'URL参数的id参数无法转化为number，请传递别的值',
            HttpStatus.NOT_ACCEPTABLE,
          );
        },
      }),
    )
    id: number,
  ) {
    return this.pipeSerivce.handleNumber(id);
  }

  /**
   * 自定义的pipe
   * 使用schema验证
   * 只用在Query装饰器上
   */
  @Get('schema-validate-pipe')
  customPipe(@Query(new JoiValidationPipe(joiSchema)) query: CustomPipeDto) {
    console.log(query);
    return query;
  }

  /**
   * 自定义的pipe
   * 使用schema验证
   * 用在整个方法上
   */
  @Get('schema-validate-use-pipes')
  @UsePipes(new JoiValidationPipe(joiSchema))
  customPipe2(@Query() query: CustomPipeDto) {
    return query;
  }

  /**
   * 自定义pipe
   * 使用类验证
   */
  @Get('class-validate-pipe/:test')
  @UsePipes(ClassValidationPipe)
  classValidatePipe(
    @Query() query: ClassCustomPipeDto,
    @Param('test') test: string,
  ) {
    console.log(test);
    return query;
  }

  /**
   * 内置的validatePipe
   */
  @Get('built-in-validation-pipe/:id')
  @UsePipes(
    new ValidationPipe({
      // disableErrorMessages: true,
      // whitelist: true, // 去掉没有在dto定义的属性
      // forbidNonWhitelisted: true, // 如果提供了不在dto的数据，就抛出错误
      transform: true, // 是否转化为dto对象，如果指定的type是primitive type，会尝试转为对应的primitive type，比如下面的id
    }),
  )
  btvp(
    @Param() param: IDSubRouteDto,
    @Param('id') id: number,
    @Query() query: ClassCustomPipeDto,
    @Query('age', ParseIntPipe) age: number,
  ) {
    console.log(query);
    console.log(param);
    console.log(id);
    console.log(age);
    //
    const response = `
    param.id: ${param.id} <br>
    虽然Dto把id定义为number，但实际上这里还是${typeof param.id}
    `;

    return response;
  }

  //#region mappedType
  /**
   * 相当于ts的util type
   */
  @Get('mapped-type-basic')
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  mtb(@Query() query: MappedTypeDto) {
    console.log(query);
    return query;
  }

  // partial
  @Get('mapped-type-partial')
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  mtp(@Query() query: PartialMappedTypeDto) {
    console.log(query);
    return query;
  }

  // pick
  @Get('mapped-type-pick')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  mtpick(@Query() query: PickMappedTypeDto) {
    console.log(query);
    return query;
  }

  // omit
  @Get('mapped-type-omit')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  mto(@Query() query: OmitMappedTypeDto) {
    console.log(query);
    return query;
  }

  // intersection
  @Get('mapped-type-intersection')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  mti(@Query() query: IntersectionMappedTypeDto) {
    console.log(query);
    return query;
  }
  //#endregion mappedType

  //#region Parsing and validating array
  // validate array in Body
  @Post('parse-array-pipe')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  pap(
    @Body(
      new ParseArrayPipe({
        items: ClassCustomPipeDto,
      }),
    )
    classCustomPipeDtos: ClassCustomPipeDto[],
  ) {
    console.log(classCustomPipeDtos);
    return classCustomPipeDtos;
  }

  // validate array in querystring
  @Get('parse-array-pipe')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  papg(
    @Query(
      'ids',
      new ParseArrayPipe({
        items: Number,
        separator: ',',
      }),
    )
    ids: number[],
  ) {
    //

    console.log(ids);
    return ids;
  }
  //#endregion Parsing and validating array

  //#region defult value
  @Get('default-value')
  dv(@Query('dv', new DefaultValuePipe(20), ParseIntPipe) dv: number) {
    console.log(dv);
    return dv;
  }
  //#endregion  default value
}
