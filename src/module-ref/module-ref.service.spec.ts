import { Test, TestingModule } from '@nestjs/testing';
import { ModuleRefService } from './module-ref.service';

describe('ModuleRefService', () => {
  let service: ModuleRefService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleRefService],
    }).compile();

    service = module.get<ModuleRefService>(ModuleRefService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
