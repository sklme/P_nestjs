import { Test, TestingModule } from '@nestjs/testing';
import { CustomDecoratorsController } from './custom-decorators.controller';

describe('CustomDecoratorsController', () => {
  let controller: CustomDecoratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomDecoratorsController],
    }).compile();

    controller = module.get<CustomDecoratorsController>(
      CustomDecoratorsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
