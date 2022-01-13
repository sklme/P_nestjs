import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({
  scope: Scope.REQUEST,
})
export class InjectionScopesService {
  @Inject(REQUEST) request: Request;
  printSelf() {
    console.log('I am a Request Scope Provider');
  }

  getRequest() {
    return this.request;
  }
}
