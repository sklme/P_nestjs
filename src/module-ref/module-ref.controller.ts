import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ModuleRefService } from './module-ref.service';

@Controller('module-ref')
export class ModuleRefController implements OnModuleInit {
  private service: ModuleRefService;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.service = this.moduleRef.get(ModuleRefService);
    console.log('获得ModuleRefService');
    console.log(this.service);
  }

  @Get('basic')
  basic() {
    return this.service.test();
  }
}
