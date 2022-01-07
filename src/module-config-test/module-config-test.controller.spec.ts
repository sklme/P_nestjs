import { Test, TestingModule } from '@nestjs/testing';
import { ModuleConfigTestController } from './module-config-test.controller';

describe('ModuleConfigTestController', () => {
  let controller: ModuleConfigTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleConfigTestController],
    }).compile();

    controller = module.get<ModuleConfigTestController>(ModuleConfigTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
