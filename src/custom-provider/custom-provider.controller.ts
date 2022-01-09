import { Controller, Get, Inject } from '@nestjs/common';
import { useValue } from './providers/token';

@Controller('custom-provider')
export class CustomProviderController {
  constructor(@Inject(useValue) private useValueService: string) {}
  @Get('use-value')
  useValueFn() {
    console.log(this.useValueService);
    return this.useValueService;
  }
}
