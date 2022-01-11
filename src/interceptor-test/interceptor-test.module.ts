import { Module } from '@nestjs/common';
import { InterceptorTestController } from './interceptor-test.controller';

@Module({
  controllers: [InterceptorTestController],
})
export class InterceptorTestModule {}
