import { Test, TestingModule } from '@nestjs/testing';
import { IespaciodeparqueoResolver } from './iespaciodeparqueo.resolver';
import { IespaciodeparqueoService } from './iespaciodeparqueo.service';

describe('IespaciodeparqueoResolver', () => {
  let resolver: IespaciodeparqueoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IespaciodeparqueoResolver, IespaciodeparqueoService],
    }).compile();

    resolver = module.get<IespaciodeparqueoResolver>(IespaciodeparqueoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
