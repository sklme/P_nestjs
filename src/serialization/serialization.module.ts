import { Module } from '@nestjs/common';
import { SerializationController } from './serialization.controller';
import { SerializationService } from './serialization.service';

@Module({
  controllers: [SerializationController],
  providers: [SerializationService],
})
export class SerializationModule {}
