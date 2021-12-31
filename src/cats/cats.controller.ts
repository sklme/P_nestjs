import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

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
   */
  @Get('library-specific')
  ls(@Res() response: Response) {
    response.status(200).send('这个是通过library-specific的方法返回response');
  }
}
