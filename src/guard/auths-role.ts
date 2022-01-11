import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  // 需要引入reflector
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    // 如果没有role限制，直接方形
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.query.user;

    return roles.includes(user as string);
  }
}
