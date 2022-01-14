import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ContextIdFactory, ModuleRef, REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ModuleRefService } from './module-ref.service';
import { NotInjectableClass } from './providers/not-injectable.provider';
import { RequstScopeProviderForModuleRefTest } from './providers/request-scope.provider';

@Controller('module-ref')
export class ModuleRefController implements OnModuleInit {
  private service: ModuleRefService;
  constructor(
    private moduleRef: ModuleRef,
    @Inject(REQUEST) private request: Request,
  ) {}

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

  @Get('context-id')
  async contextId() {
    //
    const contextId = ContextIdFactory.create();
    const providers = await Promise.all([
      this.moduleRef.resolve(RequstScopeProviderForModuleRefTest, contextId),
      this.moduleRef.resolve(RequstScopeProviderForModuleRefTest, contextId),
    ]);
    console.log('is 0 and 1 equal?', providers[0] === providers[1]); // true

    const str = `if pass context id,
    resolve can return same provider`;

    return str;
  }

  @Get('request-obj-not-exist')
  async requestObjNotExist() {
    const contextId = ContextIdFactory.create();
    const customProvider: RequstScopeProviderForModuleRefTest =
      await this.moduleRef.resolve(
        RequstScopeProviderForModuleRefTest,
        contextId,
      );

    return customProvider.checkRequestObj();
  }

  @Get('request-obj-exist')
  async requestObjExist() {
    //
    const contextId = ContextIdFactory.create();
    this.moduleRef.registerRequestByContextId(this.request, contextId);

    const customProvider: RequstScopeProviderForModuleRefTest =
      await this.moduleRef.resolve(
        RequstScopeProviderForModuleRefTest,
        contextId,
      );

    return customProvider.checkRequestObj();
  }

  @Get('get-current-sub-tree')
  async getCurrentSubTree() {
    //
    const contextId = ContextIdFactory.create();
    this.moduleRef.registerRequestByContextId(this.request, contextId);

    const customProvider: RequstScopeProviderForModuleRefTest =
      await this.moduleRef.resolve(
        RequstScopeProviderForModuleRefTest,
        contextId,
      );

    return customProvider.getAnotherProviderByCurrentIdentifier();
  }

  @Get('resolve-not-injectable')
  async notInjectable() {
    //
    const provider = await this.moduleRef.create(NotInjectableClass);

    return provider.test();
  }
}
