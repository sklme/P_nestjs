import {
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsNumberString, IsString, Max, Min } from 'class-validator';

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

//#region  mappedType
// basic
export class MappedTypeDto {
  @IsString()
  name: string;

  @IsInt()
  @Max(100)
  @Min(0)
  @Type(() => Number)
  age: number;
}

class MappedTypeDtoForIntersection {
  @IsInt()
  @Type(() => Number)
  grape: number;
}

// Patial
export class PartialMappedTypeDto extends PartialType(MappedTypeDto) {}

// Pick
export class PickMappedTypeDto extends PickType(MappedTypeDto, [
  'age',
] as const) {}

// Omit
export class OmitMappedTypeDto extends OmitType(MappedTypeDto, [
  'age',
] as const) {}

// intersection
export class IntersectionMappedTypeDto extends IntersectionType(
  MappedTypeDto,
  MappedTypeDtoForIntersection,
) {}
//#endregion mappedType
