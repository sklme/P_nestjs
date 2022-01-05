/* eslint-disable @typescript-eslint/ban-types */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { instanceToPlain, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import Joi, { ObjectSchema } from 'joi';
import { ClassCustomPipeDto } from 'src/pipe/dto/pipe.dto';

// Joi schema
export const joiSchema = Joi.object({
  id: Joi.number().integer(),
  name: Joi.string(),
  age: Joi.number().integer(),
  hobby: Joi.string(),
});

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(
    value: unknown,
    // metadata: ArgumentMetadata
  ) {
    // console.log(metadata);
    // console.log(metadata.data);
    // console.log(metadata.metatype);
    // console.log(metadata.type);
    const { error } = this.schema.validate(value);
    console.log('执行了验证');
    if (error) {
      console.log('发生了错误');
      throw new BadRequestException('请求参数验证失败');
    }
    return value;
  }
}

@Injectable()
export class ClassValidationPipe implements PipeTransform {
  async transform(value: unknown, { metatype }: ArgumentMetadata) {
    console.log('\n开始验证...', value);
    // 如果没有标记metadata，就直接不执行验证
    if (!metatype || !this.shouldExecValidate(metatype)) {
      console.log('因为没有metatype信息，所以不执行验证逻辑');
      return value;
    }
    // 将普通的class转为我们预先写好的验证类的instance
    const classInstance = plainToClass(ClassCustomPipeDto, value);
    const errors = await validate(classInstance);
    console.log('class vilidate: 执行了验证');
    if (errors.length) {
      console.log('发生了错误');
      console.log(errors);
      throw new BadRequestException('请求参数验证失败');
    }

    console.log('验证通过');
    return instanceToPlain(classInstance);
  }

  private shouldExecValidate(metadata: Function): boolean {
    const notExecTypes: Function[] = [String, Boolean, Number, Array, Object];
    return !notExecTypes.includes(metadata);
  }
}
