import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EnvVars } from 'src/config/envShape';
import { MyConfigModuleService } from 'src/my-config-module/my-config-module.service';
import { ModuleConfigTestService } from './module-config-test.service';

@Controller('module-config-test')
export class ModuleConfigTestController {
  constructor(
    private service: ModuleConfigTestService,
    private dynamicConfigModule: MyConfigModuleService,
  ) {}

  @Get('get-env')
  @UsePipes(ValidationPipe)
  index(@Query('key') key: keyof EnvVars) {
    return this.service.getEnv(key);
  }

  @Get('database-env')
  databaseEnv() {
    //
    const env = this.service.getDatabaseEnv();
    return env;
  }

  @Get('github-env')
  githubEnv() {
    return this.service.getGithubEnv();
  }

  @Get('test-dynamic-config-module')
  testDynamic() {
    const isDevelopment = this.dynamicConfigModule.get('DEVELOPMENT_MODE');
    return isDevelopment;
  }
}
