import { Test, TestingModule } from '@nestjs/testing';
import { IparquearResolver } from './iparquear.resolver';
import { IparquearService } from './iparquear.service';

describe('IparquearResolver', () => {
  let resolver: IparquearResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IparquearResolver, IparquearService],
    }).compile();

    resolver = module.get<IparquearResolver>(IparquearResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
