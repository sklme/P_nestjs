import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class LifeCycleService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnApplicationShutdown,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log('测试生命周期事件：');
    console.log('The Module has been initialized');
  }

  onApplicationBootstrap() {
    console.log('测试生命周期事件：');
    console.log('所有的组件都加载完成了');
  }

  onModuleDestroy() {
    console.log('测试生命周期事件：');
    console.log('模块即将要被destroy');
  }

  beforeApplicationShutdown(signal: string) {
    console.log('测试生命周期事件：');
    console.log('所有的模块都被destroy了，准备杀掉app', signal);
  }

  onApplicationShutdown() {
    console.log('测试生命周期事件：');
    console.log('app即将要被shutdown');
  }
}
