import { Injectable, OnModuleInit } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { LazyModuleService } from './lazy-module/lazy-module.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}
  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit() {
    const { LazyModuleModule } = await import(
      './lazy-module/lazy-module.module'
    );

    const moduleRef = await this.lazyModuleLoader.load(() => LazyModuleModule);

    const lazyService = moduleRef.get(LazyModuleService);
    console.log(lazyService.test());
  }
}
