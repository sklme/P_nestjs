import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ModuleRefService } from './module-ref.service';
import { RequstScopeProviderForModuleRefTest } from './providers/request-scope.provider';

@Controller('module-ref')
export class ModuleRefController implements OnModuleInit {
  private service: ModuleRefService;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('获取ModuleRefService...');
    this.service = this.moduleRef.get(ModuleRefService);
    console.log('获取ModuleRefService Done');
    console.log(this.service);
  }

  @Get('basic')
  basic() {
    return this.service.test();
  }

  @Get('dynamic-resolve')
  async dynamic() {
    const customProvider: RequstScopeProviderForModuleRefTest =
      await this.moduleRef.resolve(RequstScopeProviderForModuleRefTest);

    return customProvider.test();
  }
}
