import { Test, TestingModule } from '@nestjs/testing';
import { TypeormController } from './typeorm.controller';

describe('TypeormController', () => {
  let controller: TypeormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeormController],
    }).compile();

    controller = module.get<TypeormController>(TypeormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
