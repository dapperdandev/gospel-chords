import { Test, TestingModule } from '@nestjs/testing';
import { ApiBibleController } from './api-bible.controller';

describe('ApiBibleController', () => {
  let controller: ApiBibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiBibleController],
    }).compile();

    controller = module.get<ApiBibleController>(ApiBibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
