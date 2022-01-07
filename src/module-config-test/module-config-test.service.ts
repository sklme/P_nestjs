import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Database } from 'src/config/databaseConfigGroup';

@Injectable()
export class ModuleConfigTestService {
  constructor(private configService: ConfigService) {}

  getEnv(key: string) {
    // const value = this.configService.get<unknown>(key, undefined);

    const value = this.configService.get(key, {
      infer: true,
    });
    console.log(value);
    console.log(value);
    console.log(value);

    if (value) return value;

    throw new HttpException('环境变量不存在', HttpStatus.BAD_REQUEST);
  }

  getDatabaseEnv() {
    const databaseEnv = this.configService.get<Database>('database');
    return databaseEnv;
  }
}

export declare type PathValue<
  T,
  P extends Path<T>,
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;
