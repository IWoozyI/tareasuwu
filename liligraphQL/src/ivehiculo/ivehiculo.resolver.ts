import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IvehiculoService } from './ivehiculo.service';
import { Ivehiculo } from './entities/ivehiculo.entity';
import { CreateIvehiculoInput } from './dto/create-ivehiculo.input';
import { UpdateIvehiculoInput } from './dto/update-ivehiculo.input';

@Resolver(() => Ivehiculo)
export class IvehiculoResolver {
  constructor(private readonly ivehiculoService: IvehiculoService) {}

  @Mutation(() => Ivehiculo)
  createIvehiculo(@Args('createIvehiculoInput') createIvehiculoInput: CreateIvehiculoInput):Promise<Ivehiculo> {
    return this.ivehiculoService.create(createIvehiculoInput);
  }

  @Query(() => [Ivehiculo], { name: 'ivehiculo' })
  findAll():Promise<Ivehiculo[]> {
    return this.ivehiculoService.findAll();
  }

  @Query(() => Ivehiculo, { name: 'ivehiculo' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Ivehiculo> {
    return this.ivehiculoService.findOne(id);
  }

  @Mutation(() => Ivehiculo)
  updateIvehiculo(@Args('updateIvehiculoInput') updateIvehiculoInput: UpdateIvehiculoInput):Promise<Ivehiculo> {
    return this.ivehiculoService.update(updateIvehiculoInput.id, updateIvehiculoInput);
  }

  @Mutation(() => Ivehiculo)
  removeIvehiculo(@Args('id', { type: () => String }) id: string):Promise<Ivehiculo> {
    return this.ivehiculoService.remove(id);
  }
}
