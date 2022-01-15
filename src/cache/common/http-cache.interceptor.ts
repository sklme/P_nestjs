import {
  CacheInterceptor,
  Injectable,
  ExecutionContext,
  HttpServer,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest<Request>();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const httpAdapter: HttpServer = this.httpAdapterHost.httpAdapter;

    const isGetRequest = httpAdapter.getRequestMethod(request) === 'GET';
    const excludePath: string[] = [
      // ...不需要缓存的地址
    ];
    const requestPath = httpAdapter.getRequestUrl(request);

    console.log('缓存的key是：');
    console.log(requestPath);

    if (!isGetRequest || (isGetRequest && excludePath.includes(requestPath))) {
      return undefined;
    }

    return requestPath;
  }
}
