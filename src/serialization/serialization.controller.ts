import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { StudentEntity, UserEntity } from './common/dto';

@Controller('serialization')
export class SerializationController {
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  basic() {
    return new UserEntity({
      id: 1,
      firstName: 'sun',
      lastName: 'wrynn',
      password: 'password',
      role: {
        name: 'admin',
        age: 12,
      },
    });
  }

  @Get('exclude-prefix')
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    excludePrefixes: ['_'],
  })
  prefix() {
    return new StudentEntity({
      _password: '123',
      _secret: '321',
      _sensitiveInfo: 'very sensitive',
      lastName: 'kl',
      firstName: 'sun',
      id: 123,
    });
  }
}
