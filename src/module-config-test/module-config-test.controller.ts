import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ModuleConfigTestService } from './module-config-test.service';

@Controller('module-config-test')
export class ModuleConfigTestController {
  constructor(private service: ModuleConfigTestService) {}

  @Get('get-env')
  @UsePipes(ValidationPipe)
  index(@Query('key') key: string) {
    return this.service.getEnv(key);
  }

  @Get('database-env')
  databaseEnv() {
    //
    const env = this.service.getDatabaseEnv();
    return env;
  }
}
