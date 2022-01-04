import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LogFunc } from 'src/middleware/log-provider';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // inject dependence
  constructor(public logFunc: LogFunc) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    // 上下文
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errMsg = exception.message;
    const errName = exception.name;

    // 模拟一个log
    console.log('发生了一个错误');
    console.log(`URL是${request.url}`);
    this.logFunc.log();

    // 返回
    response.status(status).json({
      statusCode: status,
      errMsg,
      errName,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
