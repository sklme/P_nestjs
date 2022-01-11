import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //
    const req = context.switchToHttp().getRequest<Request>();
    const query = req.query;
    if (query.shouldPass) {
      return true;
    }

    return false;
  }
}
