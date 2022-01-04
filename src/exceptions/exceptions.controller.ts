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
  Query,
  RequestTimeoutException,
  ServiceUnavailableException,
  UnauthorizedException,
  UnprocessableEntityException,
  UnsupportedMediaTypeException,
  UseFilters,
} from '@nestjs/common';
import { AllExceptionsFilter } from './catch-everything.filter';
import { ExceptionService } from './exceptions.service';
import { MyForbiddenException } from './forbidden.exception';
import { HttpExceptionFilter } from './http-exception.filter';
import { AllExceptionsFilterInheritFromBaseExceptionFilter } from './inherite-exception.filter';

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

  @Get('exception-catch-everything')
  @UseFilters(AllExceptionsFilter)
  catchAll(@Query() query: { mode: string }) {
    // throw new ForbiddenException();
    if (query.mode === '1') {
      throw new Error('我最厉害');
    } else {
      return 'exception-catch-everything';
    }
  }

  @Get('exception-filter-inheritance')
  @UseFilters(AllExceptionsFilterInheritFromBaseExceptionFilter)
  inheritance(@Query() query: { mode: string }) {
    if (query.mode === '1') {
      // throw new Error('会被exception filter捕捉');
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          msg: '一个自定义的错误',
          extraMsg: '问题很严重',
        },
        HttpStatus.FORBIDDEN,
      );
    } else {
      return 'exception-filter-inheritance';
    }
  }
}
