import { Controller, Get, HostParam } from '@nestjs/common';

// 精确子路由host
// 尝试访问
// http://localhost:3001/subDomainTest/xxx
@Controller({
  host: 'localhost',
  path: 'subDomainTest',
})
export class SubDomainRoutingController {
  @Get('xxx')
  xxx() {
    return 'SubDomainRoutingController';
  }
}

// 也可以用route parameter的形式
// @Controller({
//   host: ':host',
//   path: 'subDomainTest',
// })
// export class SubDomainRoutingController {
//   @Get('xxx')
//   xxx(@HostParam('host') host: string) {
//     console.log(1212);
//     console.log(host); // host
//     return 'SubDomainRoutingController';
//   }
// }
