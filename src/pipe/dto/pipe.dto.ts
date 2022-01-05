import { Type } from 'class-transformer';
import { IsInt, IsNumberString, IsString } from 'class-validator';

export class CustomPipeDto {
  name: string;
  age: number;
  hobby: string;
  id: number;
}

export class ClassCustomPipeDto {
  @IsString()
  name: string;

  @IsInt()
  @Type(() => Number)
  age: number;

  @IsString()
  hobby: string;

  @IsInt()
  @Type(() => Number)
  id: number;
}

export class IDSubRouteDto {
  @IsNumberString()
  id: number;
}
