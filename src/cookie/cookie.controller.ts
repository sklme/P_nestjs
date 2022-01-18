import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Cookies } from './common/cookie.decorator';

@Controller('cookie')
export class CookieController {
  @Get()
  basic(
    @Req() req: Request,
    @Cookies() cookies: Record<string, string> | undefined,
    @Cookies('key') key: string | undefined | null,
    @Res({
      passthrough: true,
    })
    res: Response,
  ) {
    // 获得cookie
    console.log(req.cookies);
    console.log(cookies);
    console.log(key);

    // 给浏览器设置cookie
    res.cookie('key', 'value');
    res.cookie('key2', 'value2');

    return 'cookie';
  }
}
