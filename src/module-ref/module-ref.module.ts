import { Module } from '@nestjs/common';
import { ModuleRefController } from './module-ref.controller';
import { ModuleRefService } from './module-ref.service';

@Module({
  controllers: [ModuleRefController],
  providers: [ModuleRefService],
})
export class ModuleRefModule {}
