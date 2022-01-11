import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth';
import { RoleGuard } from 'src/guard/auths-role';
import { Roles } from './decorators/roles.docorator';

@Controller('guard')
export class GuideController {
  @Get('auth-guard')
  @UseGuards(AuthGuard)
  authGuild() {
    return 'authGuide';
  }

  // auth by role
  // try: http://localhost:3001/guard/auth-by-role?user=admin
  // try: http://localhost:3001/guard/auth-by-role
  @Get('auth-by-role')
  @Roles('admin')
  @UseGuards(RoleGuard)
  authByRole() {
    return 'authByRole';
  }
}
