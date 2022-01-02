import { Injectable } from '@nestjs/common';
import { Dog } from './interface/dog.interface';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll() {
    return this.dogs;
  }
}
