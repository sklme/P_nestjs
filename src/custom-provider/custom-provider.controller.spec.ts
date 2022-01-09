import { Test, TestingModule } from '@nestjs/testing';
import { CustomProviderController } from './custom-provider.controller';

describe('CustomProviderController', () => {
  let controller: CustomProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomProviderController],
    }).compile();

    controller = module.get<CustomProviderController>(CustomProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
