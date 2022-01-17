import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueuesController } from './queues.controller';
import { TestProcessor } from './test-queue.processor';

/**
 * 先运行redis数据库，因为bull基于redis
 * docker run --name test-redis -p 6379:6379 -d redis
 */

@Module({
  imports: [
    // 注册一个任务队列
    BullModule.registerQueue({
      name: 'test',
    }),
  ],
  controllers: [QueuesController],
  providers: [TestProcessor],
})
export class QueuesModule {}
