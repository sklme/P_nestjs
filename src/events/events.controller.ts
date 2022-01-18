import { Controller } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TestEvent } from './common/event.dto';

@Controller('events')
export class EventsController {
  @OnEvent('test.**')
  test(payload: TestEvent) {
    console.log('test.**');
    console.log(payload);
  }

  @OnEvent('test.*.*.*')
  test2(payload: TestEvent) {
    console.log('test.*.*.*');
    console.log(payload);
  }

  @OnEvent('test.*.*.c')
  test3(payload: TestEvent) {
    console.log('test.*.*.c');
    console.log(payload);
  }
}
