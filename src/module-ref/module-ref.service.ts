import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleRefService {
  name = 'ModuleRefService';
  test() {
    return 'I am Alive';
  }
}
