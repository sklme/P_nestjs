import { Module } from '@nestjs/common';
import { LifeCycleService } from './life-cycle.service';

@Module({
  providers: [LifeCycleService],
})
export class LifeCycleModule {}
