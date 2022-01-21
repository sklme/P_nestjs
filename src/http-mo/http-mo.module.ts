import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpMoController } from './http-mo.controller';
import { HttpMoService } from './http-mo.service';

@Module({
  imports: [HttpModule],
  controllers: [HttpMoController],
  providers: [HttpMoService],
})
export class HttpMoModule {}
