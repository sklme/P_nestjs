import {
  Controller,
  Get,
  Header,
  Headers,
  HttpCode,
  Ip,
  Next,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

@Controller('cats')
export class CatsController {
  /**
   * 基础测试
   */
  @Get(['', 'getAllCats'])
  findAll(): string {
    return 'This action returns all cats';
  }

  /**
   * 返回json的测试
   * @returns profile
   */
  @Get('profile')
  getProfile() {
    return {
      name: 'test',
      age: 12,
    };
  }

  /**
   * Library-specific to manipulate response
   * 只要是inject @Res 或者 @Response 装饰器
   * 就会进入Library-specific mode
   */
  @Get('library-specific')
  ls(@Res() response: Response) {
    response.status(200).send('这个是通过library-specific的方法返回response');
  }

  /**
   * 获取请求对象
   */
  @Get('getReqObject')
  getReqObject(@Req() req: Request) {
    console.log(req.query);
    return 'getReq';
  }

  /**
   * 测试所有的装饰器
   */
  @Get('testDecorators')
  testDecorators(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
    @Ip() ip,
  ) {
    console.log('request对象');
    console.log(req);
    console.log('Next');
    console.log(next);
    console.log('IP:');
    console.log(ip);

    // 返回结果
    res.status(200).send({
      name: '测试装饰器',
      version: '1.0.0',
    });
  }

  /**
   * Post请求测试
   */
  @Post('testPost')
  @HttpCode(200) // 修改返回的状态码
  @Header('Cache-Control', 'none') // TODO: 怎么一次性设置多个header？
  testPost(@Req() req: Request) {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);

    return '你的POST请求我已经收到了';
  }

  /**
   * 星号会被作为一个wildcard。
   * The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts
   * * match any number of characters
   * # match any single numeric character
   *
   * 尝试访问
   * - http://localhost:3001/cats/abcd?test=t
   * - http://localhost:3001/cats/ab_cd?test=t
   * - http://localhost:3001/cats/abbbbbacd?test=t
   */
  @Get('ab*cd')
  async wildcard1(@Req() req: Request) {
    console.log(req.query);
    console.log(req.path);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`async wildcard 'ab*cd' ${+new Date()}`);
      }, 1000);
    });
  }

  /**
   * 正则的测试：?
   * 尝试访问：
   * - http://localhost:3001/cats/reg1/testtest?test=t
   * - http://localhost:3001/cats/reg1/testactest?test=t
   */
  @Get('reg1/test(ac)?test')
  regexptest1(@Req() req: Request) {
    console.log(req.query);
    return 'test(ac)?test';
  }

  /**
   * 尝试访问：
   * - http://localhost:3001/cats/reg2/testactest?test=t
   * - http://localhost:3001/cats/reg2/testacactest?test=t
   * - http://localhost:3001/cats/reg2/testacacacacacacacacacactest?test=t
   */
  @Get('reg2/test(ac)+test')
  regexptest2(@Req() req: Request) {
    console.log(req.query);
    return 'test(ac)+test';
  }
}
