import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import Joi, { ObjectSchema } from 'joi';

// Joi schema
export const joiSchema = Joi.object({
  id: Joi.number().integer(),
  name: Joi.string(),
  age: Joi.number().integer(),
  hobby: Joi.string(),
});

@Injectable()
export class MyValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: unknown, metadata: ArgumentMetadata) {
    // console.log(metadata);
    // console.log(metadata.data);
    // console.log(metadata.metatype);
    // console.log(metadata.type);
    const { error } = this.schema.validate(value);
    console.log(error);
    if (error) {
      throw new BadRequestException('请求参数验证失败');
    }
    return value;
  }
}
