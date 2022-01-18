import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Cookies = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    const cookies = req.cookies as Record<string, string>;

    return data ? cookies[data] : cookies;
  },
);
