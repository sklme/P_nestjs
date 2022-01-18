import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { CommonProcessor } from './queue.processor';
import { QueuesController } from './queues.controller';
import { TestProcessor } from './test-queue.processor';

/**
 * 先运行redis数据库，因为bull基于redis
 * docker run --name test-redis -p 6379:6379 -d redis
 */

@Module({
  imports: [
    // 注册一个默认的任务队列
    BullModule.registerQueue({}),
    // 注册一个命名的任务队列
    BullModule.registerQueue({
      name: 'test',
    }),
    // 注册一个在别的进程处理的队列
    BullModule.registerQueue({
      name: 'separate',
      processors: [join(__dirname, 'separate-process.processor.js')],
    }),
  ],
  controllers: [QueuesController],
  providers: [TestProcessor, CommonProcessor],
})
export class QueuesModule {}
