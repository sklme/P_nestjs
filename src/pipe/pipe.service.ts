import { Injectable } from '@nestjs/common';

@Injectable()
export class PipeService {
  handleNumber(n: number) {
    const s = `This is a number: ${n}`;
    console.log(s);
    return s;
  }
}
