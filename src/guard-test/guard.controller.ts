import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth';

@Controller('guard')
export class GuideController {
  @Get('auth-guard')
  @UseGuards(AuthGuard)
  authGuild() {
    //
    return 'authGuide';
  }
}
