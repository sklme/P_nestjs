import { Exclude, Expose, Transform } from 'class-transformer';

class RoleEntity {
  name: string;
  age: number;
}

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  @Transform(({ value }: { value: RoleEntity }) => value.name)
  role: RoleEntity;

  @Expose()
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

export class StudentEntity {
  id: number;
  firstName: string;
  lastName: string;

  _password: string;
  _secret: string;
  _sensitiveInfo: string;

  constructor(student: StudentEntity) {
    Object.assign(this, student);
  }
}
