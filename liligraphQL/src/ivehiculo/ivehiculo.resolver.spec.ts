import { Test, TestingModule } from '@nestjs/testing';
import { IvehiculoResolver } from './ivehiculo.resolver';
import { IvehiculoService } from './ivehiculo.service';

describe('IvehiculoResolver', () => {
  let resolver: IvehiculoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IvehiculoResolver, IvehiculoService],
    }).compile();

    resolver = module.get<IvehiculoResolver>(IvehiculoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
