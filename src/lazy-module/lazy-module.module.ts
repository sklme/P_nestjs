import { Module } from '@nestjs/common';
import { LazyModuleService } from './lazy-module.service';

@Module({
  providers: [LazyModuleService],
})
export class LazyModuleModule {}
