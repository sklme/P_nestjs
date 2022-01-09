import { Test, TestingModule } from '@nestjs/testing';
import { CustomProviderService } from './custom-provider.service';

describe('CustomProviderService', () => {
  let service: CustomProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomProviderService],
    }).compile();

    service = module.get<CustomProviderService>(CustomProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
