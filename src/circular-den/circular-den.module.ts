import { Module } from '@nestjs/common';
import { CircularDenController } from './circular-den.controller';
import { CircularDenService } from './circular-den.service';
import { CircularB } from './providers/circular.b';
import { CircularA } from './providers/circular.a';
import { CircularA1 } from './providers/circular.a1';
import { CircularB1 } from './providers/circular.b1';

@Module({
  controllers: [CircularDenController],
  providers: [CircularDenService, CircularA, CircularB, CircularB1, CircularA1],
})
export class CircularDenModule {}
