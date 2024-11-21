import { Test, TestingModule } from '@nestjs/testing';
import { IespaciodeparqueoService } from './iespaciodeparqueo.service';

describe('IespaciodeparqueoService', () => {
  let service: IespaciodeparqueoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IespaciodeparqueoService],
    }).compile();

    service = module.get<IespaciodeparqueoService>(IespaciodeparqueoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
