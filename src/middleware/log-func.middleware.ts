import { Request, Response, NextFunction } from 'express';

export function LoggerMiddlewareFunc(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Request...');
  console.log('This is a nestjs function middleware.');
  // 传入下一个middleware
  next();
}
