import { Inject, Injectable, Scope } from '@nestjs/common';
import { ContextIdFactory, ModuleRef, REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { AnotherScopeProviderForModuleRefTest } from './another-scope-provider.provider';

@Injectable({
  scope: Scope.REQUEST,
})
export class RequstScopeProviderForModuleRefTest {
  @Inject(REQUEST) request: Request;
  @Inject() moduleRef: ModuleRef;

  test() {
    return 'I am RequstScopeProviderForModuleRefTest';
  }

  checkRequestObj() {
    //
    console.log(this.request);

    if (this.request) {
      return 'request obj is exist';
    }

    return 'request obj is undefined';
  }

  async getAnotherProviderByCurrentIdentifier() {
    //
    const contextId = ContextIdFactory.getByRequest(this.request);
    const another = await this.moduleRef.resolve(
      AnotherScopeProviderForModuleRefTest,
      contextId,
    );

    return another.checkRequestObj();
  }
}
