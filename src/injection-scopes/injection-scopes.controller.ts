import { Controller, Get, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { InjectionScopesService } from './injection-scopes.service';

@Controller({
  path: 'injection-scopes',
  /**
   * 在这里设置为default其实没用，因为Scope hierarchy的关系
   * 这个controller的依赖有的是TRANSIENT SCOPE，所以它也是TRANSIENT SCOPE
   */
  scope: Scope.DEFAULT,
})
export class InjectionScopesController {
  requestTimes = 0;

  @Inject(REQUEST)
  request: Request;

  constructor(
    private service: InjectionScopesService,
    @Inject('custom-provider-with-scope')
    private customTransientProvider: string,
  ) {}

  @Get('request-scope')
  requestScope() {
    console.log(this.service);
    this.service.printSelf();
    return 'requestScope';
  }

  @Get('transient-scope')
  transientScope() {
    return this.customTransientProvider;
  }

  @Get('count-req')
  countReq() {
    const str = `这是第 ${++this.requestTimes}次请求`;
    console.log(str);

    const returnMsg = `因为这个Controller是一个 Transient scope的controler
每一个消费者都会获取到一个独立的实例
所以requestTimes永远是1
    `;

    return returnMsg;
  }

  @Get('get-request')
  getRequest() {
    const request = this.service.getRequest();
    console.log(this.request === request); // true
    return request.path + ', ' + this.request.path;
  }
}

@Controller({
  path: 'injection-scopes/default-scope',
  scope: Scope.DEFAULT,
})
export class DefaultScopeController {
  requestTimes = 0;
  @Get('count-req')
  countReq() {
    const str = `这是第 ${++this.requestTimes}次请求`;
    console.log(str);

    return str;
  }
}
