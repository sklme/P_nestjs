import { Controller, Get } from '@nestjs/common';
import { CircularDenService } from './circular-den.service';

@Controller('circular-den')
export class CircularDenController {
  constructor(private service: CircularDenService) {}
  @Get()
  print() {
    return this.service.print();
  }

  @Get('module-ref')
  moduleRef() {
    return this.service.printA1B1();
  }
}
