import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';

@Controller('http-mo')
export class HttpMoController {
  constructor(private httpService: HttpService) {}

  @Get()
  basic() {
    const x = this.httpService.get(
      'http://localhost:3001/http-mo/http-module-test',
    );
    console.log(x);
    return { x: 1 };
    // return this.httpService.get<{
    //   name: string;
    //   age: number;
    //   msg: string;
    // }>('http://localhost:3001/http-mo/http-module-test');
  }

  @Get('http-module-test')
  httpModuleTest() {
    return {
      name: 'wrynnsun',
      age: 18,
      msg: 'for http module test',
    };
  }
}
