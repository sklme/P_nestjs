import { Injectable } from '@nestjs/common';
import { CircularB } from './providers/circular.b';
import { CircularA } from './providers/circular.a';
import { CircularB1 } from './providers/circular.b1';
import { CircularA1 } from './providers/circular.a1';

@Injectable()
export class CircularDenService {
  constructor(
    private a: CircularA,
    private b: CircularB,
    private a1: CircularA1,
    private b1: CircularB1,
  ) {}
  print() {
    const str = `-----
CircularA printB:
${this.a.printB()}
CircularB printA:
${this.b.printA()}`;
    console.log(str);
    return str;
  }

  printA1B1() {
    const str = `-----
CircularA printB:
${this.a1.printB()}
CircularB printA:
${this.b1.printA()}`;
    console.log(str);
    return str;
  }
}
