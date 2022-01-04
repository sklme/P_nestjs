/**
 * @file 直接继承原始的exception filter
 */
import PrettyError from 'pretty-error';
import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
const pe = new PrettyError();

@Catch()
export class AllExceptionsFilterInheritFromBaseExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    console.log('发生错误啦！笨蛋！');
    console.log('这个exception filter是继承自BaseExceptionFilter！！');
    // 直接调用基类的catch就好了
    console.log(pe.render(exception));
    super.catch(exception, host);
  }
}
