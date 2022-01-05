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
