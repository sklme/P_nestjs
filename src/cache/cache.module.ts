import { Module, CacheModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheController } from './cache.controller';
import { CacheService } from './cache.service';
import { CacheConfigService } from './common/async-config.provider';

@Module({
  imports: [
    // sync configuration
    // CacheModule.register({
    //   ttl: 1,
    //   max: 20,
    // }),
    // Async configuration
    // CacheModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory(configService: ConfigService) {
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     const cacheDatabaseConfig = configService.get('database');
    //     console.log('缓存数据库的信息是，', cacheDatabaseConfig);
    //     return {
    //       ttl: 1,
    //       max: 20,
    //     };
    //   },
    // }),
    // async configuration use class
    CacheModule.registerAsync({
      useClass: CacheConfigService,
    }),
  ],
  controllers: [CacheController],
  providers: [CacheService],
})
export class MyCacheModule {}

// Type 'DynamicModule' is missing the following properties from type 'Type<any>': apply, call, bind, prototype, and 5 more.
