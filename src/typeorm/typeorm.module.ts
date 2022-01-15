import { Module } from '@nestjs/common';
import { TypeormService } from './typeorm.service';
import { TypeormController } from './typeorm.controller';

@Module({
  providers: [TypeormService],
  controllers: [TypeormController],
})
export class TypeormModule {}
