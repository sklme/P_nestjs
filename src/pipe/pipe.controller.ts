import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { joiSchema, JoiValidationPipe } from 'src/pipes/myValidatePipe';
import { CustomPipeDto } from './dto/pipe.dto';
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
  @Get('custom-pipe')
  customPipe(@Query(new JoiValidationPipe(joiSchema)) query: CustomPipeDto) {
    console.log(query);
    return query;
  }

  /**
   * 自定义的pipe
   * 使用schema验证
   * 用在整个方法上
   */
  @Get('custom-pipe2')
  @UsePipes(new JoiValidationPipe(joiSchema))
  customPipe2(@Query() query: CustomPipeDto) {
    return query;
  }
}
