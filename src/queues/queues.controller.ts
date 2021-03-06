import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { TestTaskShape } from './common/interface';

@Controller('queues')
export class QueuesController {
  private readonly logger = new Logger(QueuesController.name);

  reqTime = 0;

  // 注入队列
  constructor(
    @InjectQueue('test') private readonly testQueue: Queue<TestTaskShape>,
    @InjectQueue('separate')
    private readonly separateQueue: Queue<TestTaskShape>,
    @InjectQueue() private readonly queue: Queue<TestTaskShape>,
  ) {}

  // default queue
  @Get()
  async defaultProducer() {
    console.log(`请求次数: ${++this.reqTime}`);
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
    console.log(`请求次数: ${++this.reqTime}`);
    const job = await this.testQueue.add({
      name: '我最厉害',
      age: 12,
      testArr: [],
    });

    const result = (await job.finished()) as TestTaskShape;

    return result;
  }

  // named Job
  @Get('named-job-to-test-queue')
  async namedJobToTestQueue() {
    console.log(`请求次数: ${++this.reqTime}`);
    const job = await this.testQueue.add('goodName', {
      name: '命名的任务',
      age: 1,
    });

    const result = (await job.finished()) as TestTaskShape;

    return result;
  }

  // separate
  @Get('separate-process')
  async separateProcess() {
    console.log(`请求次数: ${++this.reqTime}`);
    this.logger.debug(`主进程id: ${process.pid}`);

    const job = await this.separateQueue.add({
      name: '在不同进程处理的任务',
      age: 1,
    });

    const result = (await job.finished()) as TestTaskShape;

    this.logger.debug('多进程任务处理完成...');

    return result;
  }
}
