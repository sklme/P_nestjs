import { Injectable } from '@nestjs/common';

@Injectable()
export class LogFunc {
  log() {
    console.log('This is a log provider');
    console.log('这是一个log provider');
  }
}
