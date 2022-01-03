import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  Controller,
  ForbiddenException,
  GatewayTimeoutException,
  Get,
  GoneException,
  HttpException,
  HttpStatus,
  HttpVersionNotSupportedException,
  ImATeapotException,
  MethodNotAllowedException,
  NotAcceptableException,
  NotFoundException,
  NotImplementedException,
  PayloadTooLargeException,
  PreconditionFailedException,
  RequestTimeoutException,
  ServiceUnavailableException,
  UnauthorizedException,
  UnprocessableEntityException,
  UnsupportedMediaTypeException,
  UseFilters,
} from '@nestjs/common';
import { ExceptionService } from './exceptions.service';
import { MyForbiddenException } from './forbidden.exception';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('exception-filters')
// @UseFilters(HttpExceptionFilter)
export class ExceptionController {
  constructor(private exceptionService: ExceptionService) {}

  //#region standard exceptions
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
  //#endregion standard exceptions

  @Get('custom-forbidden')
  cforbidden() {
    throw new MyForbiddenException();
  }

  @Get('built-in-http-exception')
  builtIn() {
    // throw new BadRequestException();
    // throw new UnauthorizedException();
    // throw new NotFoundException();
    // throw new ForbiddenException();
    // throw new NotAcceptableException();
    // throw new RequestTimeoutException();
    // throw new ConflictException();
    // throw new GoneException();
    // throw new HttpVersionNotSupportedException();
    // throw new PayloadTooLargeException();
    // throw new UnsupportedMediaTypeException();
    // throw new UnprocessableEntityException();
    // throw new ImATeapotException();
    // throw new MethodNotAllowedException();
    // throw new BadGatewayException();
    // throw new ServiceUnavailableException();
    // throw new GatewayTimeoutException();
    throw new PreconditionFailedException();
  }

  @Get('exception-filter')
  exfilter() {
    throw new ForbiddenException();
  }
}
