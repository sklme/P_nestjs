import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { UserEntity } from './common/dto';

@Controller('serialization')
export class SerializationController {
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  basic() {
    return new UserEntity({
      id: 1,
      firstName: 'Kamil',
      lastName: 'Mysliwiec',
      password: 'password',
    });
  }
}
