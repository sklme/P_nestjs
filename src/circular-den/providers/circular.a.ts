import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CircularB } from './circular.b';

@Injectable()
export class CircularA {
  constructor(@Inject(forwardRef(() => CircularB)) private b: CircularB) {}
  printB() {
    return this.b.print();
  }

  print() {
    console.log('i am A');
    return 'i am A';
  }
}
