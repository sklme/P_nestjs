import { Module } from '@nestjs/common';
import { CircularDenController } from './circular-den.controller';
import { CircularDenService } from './circular-den.service';
import { CircularB } from './providers/circular.b';
import { CircularA } from './providers/circular.a';

@Module({
  controllers: [CircularDenController],
  providers: [CircularDenService, CircularA, CircularB],
})
export class CircularDenModule {}
