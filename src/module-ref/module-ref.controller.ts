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

  @Get('resolve-return-is-unique')
  async resolveReturnIsUnique() {
    const providers = await Promise.all([
      this.moduleRef.resolve(RequstScopeProviderForModuleRefTest),
      this.moduleRef.resolve(RequstScopeProviderForModuleRefTest),
    ]);
    console.log('is 0 and 1 equal?', providers[0] === providers[1]); // false

    return 'The resolve() method returns a unique instance of the provider, from its own DI container sub-tree. Each sub-tree has a unique context identifier. Thus, if you call this method more than once and compare instance references, you will see that they are not equal.';
  }
}
