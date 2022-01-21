import { Test, TestingModule } from '@nestjs/testing';
import { HttpMoService } from './http-mo.service';

describe('HttpMoService', () => {
  let service: HttpMoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpMoService],
    }).compile();

    service = module.get<HttpMoService>(HttpMoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
