import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';
import { Request } from 'express';

const defaultUserInfo = {
  id: 101,
  firstName: 'iskl',
  lastName: 'sun',
  email: 'sun@email.com',
  roles: ['admin'],
};

export class UserEntity {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  roles: string[];
}

// export const AddUser = createParamDecorator(
//   (data: unknown, ctx: ExecutionContext) => {
//     console.log('我是AddUser Decorator');
//     const request = ctx.switchToHttp().getRequest<Request>();

//     if (data) {
//       // request.userInfo = request;
//       Reflect.defineProperty(request, 'userInfo', {
//         value: request,
//       });
//     }
//   },
// );

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { userInfo: UserEntity }>();

    // harcode
    Reflect.defineProperty(request, 'userInfo', {
      value: defaultUserInfo,
    });

    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return request.userInfo[data as keyof UserEntity];
    }

    return request.userInfo;
  },
);
