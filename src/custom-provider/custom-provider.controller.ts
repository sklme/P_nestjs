import { Controller, Get, Inject } from '@nestjs/common';
import {
  MyProviderFactory as MyProviderFactoryToken,
  useValue,
} from './providers/token';
import { CustomProviderClass } from './providers/use-class';

@Controller('custom-provider')
export class CustomProviderController {
  constructor(
    @Inject(useValue) private useValueService: string,
    private useClassSerivce: CustomProviderClass,
    @Inject(MyProviderFactoryToken)
    private useFactoryService: Record<string, unknown>,
  ) {}

  @Get('use-value')
  useValueFn() {
    console.log(this.useValueService);
    return this.useValueService;
  }

  @Get('use-class')
  useClassFn() {
    this.useClassSerivce.test();
    console.log(this.useClassSerivce.x);

    return this.useClassSerivce.desc;
  }

  @Get('use-factory')
  useFactoryFn() {
    console.log('use-factory');

    // return
    return this.useFactoryService;
  }
}
