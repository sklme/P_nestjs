import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

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

  // @Cron('* * * * * *')
  // handleCron() {
  //   this.logger.debug('每秒执行');
  // }

  // @Cron('*/2 * * * * *')
  // step2() {
  //   this.logger.debug('每两秒执行');
  // }

  // @Cron('1,2,3,4,5,6,20-30 * * * * *')
  // range() {
  //   this.logger.debug('某一范围执行');
  // }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.logger.debug('每5秒执行');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('Called every 10 seconds');
  }

  @Timeout(10000)
  handleTimeout() {
    this.logger.warn('我真是太猛了');
  }
}
