import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvVars } from 'src/config/envShape';

@Injectable()
export class ModuleConfigTestService {
  constructor(private configService: ConfigService<EnvVars>) {}

  getEnv(key: keyof EnvVars) {
    // const value = this.configService.get<unknown>(key, undefined);

    const value = this.configService.get(key, {
      infer: true,
    });

    if (value) return value;

    throw new HttpException('环境变量不存在', HttpStatus.BAD_REQUEST);
  }

  getDatabaseEnv() {
    const databaseEnv = this.configService.get('database', {
      infer: true,
    });
    return databaseEnv;
  }
}
