import { Module } from '@nestjs/common';
import { CustomProviderService } from './custom-provider.service';
import { CustomProviderController } from './custom-provider.controller';
import useValue from './providers/use-value';
import useClass from './providers/use-class';
import MyProviderFactory from './providers/use-factory';

@Module({
  providers: [
    CustomProviderService,
    useValue,
    useClass,
    MyProviderFactory,
    {
      provide: 'test',
      useValue: '我是一个测试',
    },
  ],
  controllers: [CustomProviderController],
})
export class CustomProviderModule {}
