import { Test, TestingModule } from '@nestjs/testing';
import { HttpMoController } from './http-mo.controller';

describe('HttpMoController', () => {
  let controller: HttpMoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpMoController],
    }).compile();

    controller = module.get<HttpMoController>(HttpMoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
