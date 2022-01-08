import { DynamicModule, Module } from '@nestjs/common';
import { MyConfigModuleService } from './my-config-module.service';
import { CONFIG_OPTIONS } from './constants';

export interface MyConfigModuleOptions {
  folder: string;
}

@Module({})
export class MyConfigModuleModule {
  static register(options: MyConfigModuleOptions): DynamicModule {
    //
    return {
      module: MyConfigModuleModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        MyConfigModuleService,
      ],
      exports: [MyConfigModuleService],
    };
  }
}
