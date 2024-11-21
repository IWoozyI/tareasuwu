import { Test, TestingModule } from '@nestjs/testing';
import { IparquearService } from './iparquear.service';

describe('IparquearService', () => {
  let service: IparquearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IparquearService],
    }).compile();

    service = module.get<IparquearService>(IparquearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
