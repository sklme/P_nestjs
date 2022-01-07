import { Module } from '@nestjs/common';
import { ModuleConfigTestController } from './module-config-test.controller';
import { ModuleConfigTestService } from './module-config-test.service';

// TODO validation的测试
@Module({
  controllers: [ModuleConfigTestController],
  providers: [ModuleConfigTestService],
})
export class ModuleConfigTestModule {}
