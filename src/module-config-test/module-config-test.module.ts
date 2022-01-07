import { Module } from '@nestjs/common';
import { ModuleConfigTestController } from './module-config-test.controller';
import { ModuleConfigTestService } from './module-config-test.service';

@Module({
  controllers: [ModuleConfigTestController],
  providers: [ModuleConfigTestService],
})
export class ModuleConfigTestModule {}
