import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  Cron,
  CronExpression,
  Interval,
  Timeout,
  SchedulerRegistry,
} from '@nestjs/schedule';
import { CronJob } from 'cron';

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second (optional)

@Injectable()
export class TaskScheduleService {
  private readonly logger = new Logger(TaskScheduleService.name);

  @Inject() private schedulerRegistry: SchedulerRegistry;

  // @Cron('* * * * * *')
  // handleCron() {
  //   this.logger.debug('每秒执行');
  //   const allJobs = this.schedulerRegistry.getCronJobs();
  //   const jobNames = [...allJobs].map((map) => map[0]);
  //   console.log(jobNames);
  // }

  // @Cron('*/2 * * * * *')
  // step2() {
  //   this.logger.debug('每两秒执行');
  // }

  // @Cron('1,2,3,4,5,6,20-30 * * * * *')
  // range() {
  //   this.logger.debug('某一范围执行');
  // }

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // handleCron() {
  //   this.logger.debug('每5秒执行');
  // }

  // @Interval(10000)
  // handleInterval() {
  //   this.logger.debug('Called every 10 seconds');
  // }

  // @Timeout(10000)
  // handleTimeout() {
  //   this.logger.warn('我真是太猛了');
  // }

  // @Cron(CronExpression.EVERY_5_SECONDS, {
  //   name: 'every_5_senconds',
  // })
  // every5Sec() {
  //   this.logger.debug('Called every 5 seconds');
  // }

  // @Timeout('stop_every_5_senconds', 15000)
  // stop5Secs() {
  //   //
  //   const job = this.schedulerRegistry.getCronJob('every_5_senconds');
  //   console.log('停止5秒一次的任务');
  //   job.stop();

  //   const every10Secs = new CronJob(CronExpression.EVERY_10_SECONDS, () => {
  //     this.logger.debug('10秒运行一次');
  //   });
  //   this.schedulerRegistry.addCronJob('stop_every_10_senconds', every10Secs);
  //   console.log('开始10秒一次的任务');
  //   every10Secs.start();
  //   console.log('删除掉5秒的任务');
  //   this.schedulerRegistry.deleteCronJob('every_5_senconds');
  // }
}
