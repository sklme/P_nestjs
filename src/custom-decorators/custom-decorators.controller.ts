import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { User, UserEntity } from './decorators/user.decorator';

@Controller('custom-decorators')
export class CustomDecoratorsController {
  @Get('add-user-property')
  addUserProperty(
    @User(
      new ValidationPipe({
        validateCustomDecorators: true,
      }),
    )
    userInfo: UserEntity,
  ) {
    return userInfo || '未找到';
  }
}
