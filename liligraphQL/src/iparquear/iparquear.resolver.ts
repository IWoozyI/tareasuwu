import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IparquearService } from './iparquear.service';
import { Iparquear } from './entities/iparquear.entity';
import { CreateIparquearInput } from './dto/create-iparquear.input';
import { UpdateIparquearInput } from './dto/update-iparquear.input';

@Resolver(() => Iparquear)
export class IparquearResolver {
  constructor(private readonly iparquearService: IparquearService) {}

  @Mutation(() => Iparquear)
  createIparquear(@Args('createIparquearInput') createIparquearInput: CreateIparquearInput):Promise<Iparquear> {
    return this.iparquearService.create(createIparquearInput);
  }

  @Query(() => [Iparquear], { name: 'iparquear' })
  findAll():Promise<Iparquear[]> {
    return this.iparquearService.findAll();
  }

  @Query(() => Iparquear, { name: 'iparquear' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Iparquear> {
    return this.iparquearService.findOne(id);
  }

  @Mutation(() => Iparquear)
  updateIparquear(@Args('updateIparquearInput') updateIparquearInput: UpdateIparquearInput):Promise<Iparquear> {
    return this.iparquearService.update(updateIparquearInput.id, updateIparquearInput);
  }

  @Mutation(() => Iparquear)
  removeIparquear(@Args('id', { type: () => String }) id: string):Promise<Iparquear> {
    return this.iparquearService.remove(id);
  }
}
