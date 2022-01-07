import { Test, TestingModule } from '@nestjs/testing';
import { ModuleConfigTestService } from './module-config-test.service';

describe('ModuleConfigTestService', () => {
  let service: ModuleConfigTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleConfigTestService],
    }).compile();

    service = module.get<ModuleConfigTestService>(ModuleConfigTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
