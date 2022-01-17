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
}
