import { Module } from '@nestjs/common';
import { PipeController } from './pipe.controller';
import { PipeService } from './pipe.service';

@Module({
  controllers: [PipeController],
  providers: [PipeService],
})
export class PipeModule {}
