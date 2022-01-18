import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cookie')
export class CookieController {
  @Get()
  basic(
    @Req() req: Request,
    @Res({
      passthrough: true,
    })
    res: Response,
  ) {
    // 获得log
    console.log(req.cookies);

    // 给浏览器设置cookie
    res.cookie('key', 'value');
    res.cookie('key2', 'value2');

    return 'cookie';
  }
}
