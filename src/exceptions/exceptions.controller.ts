import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionService } from './exceptions.service';

@Controller('exception-filters')
export class ExceptionController {
  constructor(private exceptionService: ExceptionService) {}

  @Get()
  root() {
    // return '123';
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('exception-res-text')
  extext() {
    throw new HttpException('没有权限访问', HttpStatus.FORBIDDEN);
  }

  @Get('exception-res-body')
  exbd() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: '没有权限访问',
        timestamp: +new Date(),
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
