import { Test, TestingModule } from '@nestjs/testing';
import { SerializationController } from './serialization.controller';

describe('SerializationController', () => {
  let controller: SerializationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerializationController],
    }).compile();

    controller = module.get<SerializationController>(SerializationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
