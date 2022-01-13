import { Controller, Get, Inject } from '@nestjs/common';
import { InjectionScopesService } from './injection-scopes.service';

@Controller('injection-scopes')
export class InjectionScopesController {
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
}
