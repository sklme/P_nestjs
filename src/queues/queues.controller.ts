import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { TestTaskShape } from './common/interface';

@Controller('queues')
export class QueuesController {
  private readonly logger = new Logger(QueuesController.name);

  // 注入队列
  constructor(
    @InjectQueue('test') private readonly testQueue: Queue<TestTaskShape>,
    @InjectQueue() private readonly queue: Queue<TestTaskShape>,
  ) {}

  // default queue
  @Get()
  async defaultProducer() {
    const job = await this.queue.add({
      name: '什么什么',
      age: 100000,
    });

    this.logger.debug('往commonQueue添加任务');
    const result = (await job.finished()) as TestTaskShape;

    return result;
  }

  // producer
  @Get('add-job-to-test-queue')
  async addJobToTestQueue() {
    const job = await this.testQueue.add({
      name: '我最厉害',
      age: 12,
      testArr: [],
    });

    const result = (await job.finished()) as TestTaskShape;

    return result;
  }
}
