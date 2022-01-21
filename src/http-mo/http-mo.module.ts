import { Module } from '@nestjs/common';
import { HttpMoController } from './http-mo.controller';
import { HttpMoService } from './http-mo.service';

@Module({
  controllers: [HttpMoController],
  providers: [HttpMoService],
})
export class HttpMoModule {}
