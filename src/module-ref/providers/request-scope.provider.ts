import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({
  scope: Scope.REQUEST,
})
export class RequstScopeProviderForModuleRefTest {
  @Inject(REQUEST) request: Request;

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
}
