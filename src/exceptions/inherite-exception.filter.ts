/**
 * @file 直接继承原始的exception filter
 */

import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilterInheritFromBaseExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    console.log('发生错误啦！笨蛋！');
    console.log('这个exception filter是继承自BaseExceptionFilter！！');
    // 直接调用基类的catch就好了
    console.log(exception);
    super.catch(exception, host);
  }
}
