import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TimeoutInterceptor } from './interceptor/timeout.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';

@Controller('interceptor-test')
export class InterceptorTestController {
  @Get('aspect-interception')
  @UseInterceptors(LoggingInterceptor)
  aspectInterception() {
    return '我最厉害';
  }

  @Get('response-mapping')
  @UseInterceptors(TransformInterceptor)
  responseMapping(@Query('return') returnValue: unknown) {
    //
    return returnValue || null;
  }

  @Get('exception-mapping')
  @UseInterceptors(TimeoutInterceptor)
  async exceptionMapping() {
    // TODO 这里为什么会重试三次？
    const timeout = Math.random() * 2000 + 5000;
    console.log('延时时间', timeout);
    return new Promise((resolve) => {
      setTimeout(() => resolve('done'), timeout);
    });
  }
}
