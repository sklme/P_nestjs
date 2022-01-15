import {
  Injectable,
  CacheOptionsFactory,
  CacheModuleOptions,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  constructor(private configService: ConfigService) {}
  async createCacheOptions(): Promise<CacheModuleOptions<Record<string, any>>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const cacheDbConfig = await this.configService.get('database');
    console.log('缓存数据库的信息是，', cacheDbConfig);

    return {
      ttl: 1,
      max: 20,
    };
  }
}
