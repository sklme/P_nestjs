/**
 * 先在docker运行mysql
 * docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=testpassword -d mysql:latest
 */

import { Controller, Get } from '@nestjs/common';

@Controller('typeorm')
export class TypeormController {
  @Get()
  basic() {
    console.log(121);
    return 'typeorm';
  }
}
