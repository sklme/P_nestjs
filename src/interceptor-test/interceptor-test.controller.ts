import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
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
}
