import { Controller } from '@nestjs/common';
import { PipeService } from './pipe.service';

@Controller('pipe')
export class PipeController {
  constructor(public pipeSerivce: PipeService) {}
}
