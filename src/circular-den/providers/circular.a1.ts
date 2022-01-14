import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CircularB1 } from './circular.b1';

@Injectable()
export class CircularA1 implements OnModuleInit {
  private b: CircularB1;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.b = this.moduleRef.get(CircularB1);
  }

  printB() {
    return this.b.print();
  }

  print() {
    console.log('i am A1');
    return 'i am A1';
  }
}
