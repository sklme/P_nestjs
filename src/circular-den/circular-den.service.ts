import { Injectable } from '@nestjs/common';
import { CircularB } from './providers/circular.b';
import { CircularA } from './providers/circular.a';

@Injectable()
export class CircularDenService {
  constructor(private a: CircularA, private b: CircularB) {}
  print() {
    const str = `-----
CircularA printB:
${this.a.printB()}
CircularB printA:
${this.b.printA()}`;
    console.log(str);
    return str;
  }
}
