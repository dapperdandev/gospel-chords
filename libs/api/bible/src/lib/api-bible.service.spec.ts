import { Test, TestingModule } from '@nestjs/testing';
import { ApiBibleService } from './api-bible.service';

describe('ApiBibleService', () => {
  let service: ApiBibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiBibleService],
    }).compile();

    service = module.get<ApiBibleService>(ApiBibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
