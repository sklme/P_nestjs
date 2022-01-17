import { InjectQueue } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull';
import { TestTaskShape } from './common/interface';

@Controller('queues')
export class QueuesController {
  // 注入队列
  constructor(
    @InjectQueue('test') private readonly testQueue: Queue<TestTaskShape>,
  ) {}

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
