import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
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
  @UsePipes(ValidationPipe)
  btvp(@Param() param: IDSubRouteDto) {
    //
    const response = `
    param.id: ${param.id} <br>
    虽然Dto把id定义为number，但实际上这里还是${typeof param.id}
    `;

    return response;
  }
}
