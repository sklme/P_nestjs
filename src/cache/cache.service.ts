import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  getPersonInfo() {
    return {
      ts: new Date().toISOString(),
      name: '悲剧',
      age: Math.random() * 20,
    };
  }
}
