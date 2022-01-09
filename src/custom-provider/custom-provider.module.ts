import { Module } from '@nestjs/common';
import { CustomProviderService } from './custom-provider.service';
import { CustomProviderController } from './custom-provider.controller';
import useValue from './providers/use-value';

@Module({
  providers: [CustomProviderService, useValue],
  controllers: [CustomProviderController],
})
export class CustomProviderModule {}
