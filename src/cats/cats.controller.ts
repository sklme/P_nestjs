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
}
