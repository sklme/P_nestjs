import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { TestTaskShape } from './common/interface';

@Processor() // 这个test 是指定队列的名字
export class CommonProcessor {
  private readonly logger = new Logger(CommonProcessor.name);

  @Process()
  async handleCommon(job: Job<TestTaskShape>) {
    this.logger.debug('common测试队列任务开始处理...');

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

    this.logger.debug('common任务处理完成', Date.now() - now);

    return result;
  }
}
