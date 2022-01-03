import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LogFunc } from './log-provider';

@Injectable()
export class LoggerMiddlewareClass implements NestMiddleware {
  constructor(private logProvider: LogFunc) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    console.log('This is a nestjs class middleware.');
    this.logProvider.log();
    // 传入下一个middleware
    next();
  }
}
