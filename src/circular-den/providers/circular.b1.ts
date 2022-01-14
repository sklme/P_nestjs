import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CircularA1 } from './circular.a1';

@Injectable()
export class CircularB1 implements OnModuleInit {
  private a: CircularA1;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.a = this.moduleRef.get(CircularA1);
  }

  printA() {
    return this.a.print();
  }

  print() {
    console.log('i am B1');
    return 'i am B1';
  }
}
