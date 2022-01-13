import { Controller, Get } from '@nestjs/common';
import { InjectionScopesService } from './injection-scopes.service';

@Controller('injection-scopes')
export class InjectionScopesController {
  constructor(private service: InjectionScopesService) {}
  @Get('request-scope')
  requestScope() {
    console.log(this.service);
    this.service.printSelf();
    return 'requestScope';
  }
}
