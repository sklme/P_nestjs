import { Test, TestingModule } from '@nestjs/testing';
import { LazyModuleService } from './lazy-module.service';

describe('LazyModuleService', () => {
  let service: LazyModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazyModuleService],
    }).compile();

    service = module.get<LazyModuleService>(LazyModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
