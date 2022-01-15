import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  getPersonInfo() {
    return {
      name: '悲剧',
      age: Math.random() * 20,
    };
  }
}
