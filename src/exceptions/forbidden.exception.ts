import { HttpException, HttpStatus } from '@nestjs/common';

export class MyForbiddenException extends HttpException {
  constructor() {
    super('这是自定义的forbidden错误', HttpStatus.FORBIDDEN);
  }
}
