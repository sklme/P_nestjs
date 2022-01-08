import { Test, TestingModule } from '@nestjs/testing';
import { MyConfigModuleService } from './my-config-module.service';

describe('MyConfigModuleService', () => {
  let service: MyConfigModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyConfigModuleService],
    }).compile();

    service = module.get<MyConfigModuleService>(MyConfigModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
