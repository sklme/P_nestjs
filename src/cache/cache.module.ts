import { Module, CacheModule } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { CacheService } from './cache.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [CacheController],
  providers: [CacheService],
})
export class MyCacheModule {}

// Type 'DynamicModule' is missing the following properties from type 'Type<any>': apply, call, bind, prototype, and 5 more.
