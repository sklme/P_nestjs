import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TestEvent } from './common/event.dto';

@Injectable()
export class EventsService {
  @Inject() private eventEmitter: EventEmitter2;

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // testEvents() {
  //   // 下面两个事件是一样的
  //   // this.eventEmitter.emit('test.a.b.c', new TestEvent('傻子', 12));
  //   this.eventEmitter.emit(['test', 'a', 'b', 'c'], new TestEvent('傻子', 12));
  // }

  @OnEvent('test.a.b.c')
  test(payload: TestEvent) {
    console.log('触发test.a.b.c');
    console.log(payload);
  }
}
