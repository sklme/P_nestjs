import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './constants';
import { MyConfigModuleOptions } from './my-config-module.module';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

@Injectable()
export class MyConfigModuleService {
  private readonly envConfig: {
    [key: string]: string;
  };
  constructor(@Inject(CONFIG_OPTIONS) options: MyConfigModuleOptions) {
    //
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(options.folder, filePath);
    try {
      this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    } catch (e) {
      this.envConfig = {};
      console.log(e);
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
