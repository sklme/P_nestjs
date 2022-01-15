import {
  CacheInterceptor,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CacheService } from './cache.service';

interface BasicCache {
  name: string;
  age: number;
}

@Controller('cache')
export class CacheController {
  BASIC_CACHE_KEY = 'BASIC_CACHE_KEY';
  constructor(
    private service: CacheService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async basic() {
    let cache = await this.cacheManager.get<BasicCache>(this.BASIC_CACHE_KEY);

    if (cache) {
      return Object.assign(cache, {
        msg: '来自cache',
      });
    }

    const data = this.service.getPersonInfo();
    cache = await this.cacheManager.set<BasicCache>(this.BASIC_CACHE_KEY, data);

    return Object.assign(cache, {
      msg: '不是来自Cache',
    });
  }

  @Get('auto-caching')
  @UseInterceptors(CacheInterceptor)
  autoCaching() {
    return this.service.getPersonInfo();
  }
}
