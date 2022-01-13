import { Test, TestingModule } from '@nestjs/testing';
import { CircularDenController } from './circular-den.controller';

describe('CircularDenController', () => {
  let controller: CircularDenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CircularDenController],
    }).compile();

    controller = module.get<CircularDenController>(CircularDenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
