import { Inject } from '@nestjs/common';
import { useValue } from './token';

export class CustomProviderClass {
  x: number;
  desc: string;
  constructor(@Inject(useValue) public valueProvider: string) {
    this.x = 2;
    this.desc = '自定义的class provider';
  }

  test() {
    console.log('class provider inject了value provider');
    console.log(this.valueProvider);
    console.log('test');
  }
}

export default {
  provide: CustomProviderClass,
  useClass: CustomProviderClass,
};
