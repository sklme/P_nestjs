import { Test, TestingModule } from '@nestjs/testing';
import { CircularDenService } from './circular-den.service';

describe('CircularDenService', () => {
  let service: CircularDenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircularDenService],
    }).compile();

    service = module.get<CircularDenService>(CircularDenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
