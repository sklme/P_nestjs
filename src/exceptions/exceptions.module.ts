import { Module } from '@nestjs/common';
import { ExceptionController } from './exceptions.controller';
import { ExceptionService } from './exceptions.service';

@Module({
  controllers: [ExceptionController],
  providers: [ExceptionService],
})
export class ExceptionModule {}
