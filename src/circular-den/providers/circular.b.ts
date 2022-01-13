import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CircularA } from './circular.a';

@Injectable()
export class CircularB {
  constructor(@Inject(forwardRef(() => CircularA)) private a: CircularA) {}

  printA() {
    return this.a.print();
  }

  print() {
    console.log('i am B');
    return 'i am B';
  }
}
