import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

@Controller('interceptor-test')
export class InterceptorTestController {
  @Get('aspect-interception')
  @UseInterceptors(LoggingInterceptor)
  aspectInterception() {
    return '我最厉害';
  }
}
