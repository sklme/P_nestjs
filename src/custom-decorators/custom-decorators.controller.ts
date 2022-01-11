import { Controller, Get } from '@nestjs/common';
import { User } from './decorators/user.decorator';

@Controller('custom-decorators')
export class CustomDecoratorsController {
  @Get('add-user-property')
  addUserProperty(@User('email') userInfo: Record<string, string> | string) {
    return userInfo || '未找到';
  }
}
