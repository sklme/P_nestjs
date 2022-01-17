import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

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

  @Cron('* * * * * *')
  handleCron() {
    this.logger.debug('每秒执行');
  }

  @Cron('*/2 * * * * *')
  step2() {
    this.logger.debug('每两秒执行');
  }

  @Cron('1,2,3,4,5,6,20-30 * * * * *')
  range() {
    this.logger.debug('某一范围执行');
  }
}
