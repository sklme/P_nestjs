import { Module } from '@nestjs/common';
import { QueuesController } from './queues.controller';

/**
 * 先运行redis数据库，因为bull基于redis
 * docker run --name test-redis -p 6379:6379 -d redis
 */

@Module({
  controllers: [QueuesController],
})
export class QueuesModule {}
