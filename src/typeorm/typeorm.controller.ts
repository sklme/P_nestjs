/**
 * 先在docker运行mysql
 * docker run --name=test-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test-mysql -d mysql:latest
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
