import { Module } from '@nestjs/common';
import { MyConfigModuleModule } from 'src/my-config-module/my-config-module.module';
import { ModuleConfigTestController } from './module-config-test.controller';
import { ModuleConfigTestService } from './module-config-test.service';

// TODO validation的测试
@Module({
  imports: [
    MyConfigModuleModule.register({
      folder: '',
    }),
  ],
  controllers: [ModuleConfigTestController],
  providers: [ModuleConfigTestService],
})
export class ModuleConfigTestModule {}
