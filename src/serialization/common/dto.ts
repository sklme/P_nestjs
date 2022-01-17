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
