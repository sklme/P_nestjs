import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { TestTaskShape } from './common/interface';

@Processor('test') // 这个test 是指定队列的名字
export class TestProcessor {
  private readonly logger = new Logger(TestProcessor.name);

  @Process()
  async handleCommon(job: Job<TestTaskShape>) {
    this.logger.debug('测试队列任务开始处理...');

    const now = Date.now();

    const result = await new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < 1000; i++) {
          if (!job.data.testArr) {
            job.data.testArr = [i * 1000];
          }
          job.data.testArr.push(Math.random() * 1000 * i);
        }
        resolve(job.data);
      }, Math.random() * 5000);
    });

    this.logger.debug('任务处理完成', Date.now() - now);

    return result;
  }

  @Process('goodName')
  async goodName(job: Job<TestTaskShape>) {
    this.logger.debug('goodName任务开始处理...');

    const now = Date.now();

    const result = await new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < 10000; i++) {
          if (!job.data.testArr) {
            job.data.testArr = [i * 1000];
          }
          job.data.testArr.push(Math.random());
        }
        resolve(job.data);
      }, Math.random() * 5000);
    });

    this.logger.debug('goodName任务处理完成', Date.now() - now);

    return result;
  }
}
