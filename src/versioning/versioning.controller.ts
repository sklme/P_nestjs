import { Controller, Get, Version } from '@nestjs/common';

@Controller('versioning')
export class VersioningController {
  /**
   * try:
   * http://localhost:3001/v1/versioning
   */
  @Get()
  @Version('1')
  basic() {
    return 'v1 verison content';
  }

  @Get('multiple-version')
  @Version(['1', '2'])
  multiple() {
    return 'v1,v2 version content';
  }
}
