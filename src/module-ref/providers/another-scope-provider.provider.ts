import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({
  scope: Scope.REQUEST,
})
export class AnotherScopeProviderForModuleRefTest {
  @Inject(REQUEST) request: Request;

  test() {
    return 'I am AnotherScopeProviderForModuleRefTest';
  }

  checkRequestObj() {
    //
    console.log(this.request);
    console.log('我是AnotherScopeProviderForModuleRefTest');

    if (this.request) {
      return '我是AnotherScopeProviderForModuleRefTest, request obj is exist';
    }

    return '我是AnotherScopeProviderForModuleRefTest, request obj is undefined';
  }
}
