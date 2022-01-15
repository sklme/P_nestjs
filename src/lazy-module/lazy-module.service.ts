import { Injectable } from '@nestjs/common';

@Injectable()
export class LazyModuleService {
  test() {
    return '我是懒加载组件';
  }
}
