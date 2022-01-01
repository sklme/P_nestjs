import { Controller, Get, Ip, Next, Req, Res } from '@nestjs/common';
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
}
