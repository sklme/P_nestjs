import { Module } from '@nestjs/common';
import { GuideController } from './guard.controller';
import { GuideService } from './guard.service';

@Module({
  controllers: [GuideController],
  providers: [GuideService],
})
export class GuideModule {}
