import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IespaciodeparqueoService } from './iespaciodeparqueo.service';
import { Iespaciodeparqueo } from './entities/iespaciodeparqueo.entity';
import { CreateIespaciodeparqueoInput } from './dto/create-iespaciodeparqueo.input';
import { UpdateIespaciodeparqueoInput } from './dto/update-iespaciodeparqueo.input';

@Resolver(() => Iespaciodeparqueo)
export class IespaciodeparqueoResolver {
  constructor(private readonly iespaciodeparqueoService: IespaciodeparqueoService) {}

  @Mutation(() => Iespaciodeparqueo)
  createIespaciodeparqueo(@Args('createIespaciodeparqueoInput') createIespaciodeparqueoInput: CreateIespaciodeparqueoInput):Promise<Iespaciodeparqueo> {
    return this.iespaciodeparqueoService.create(createIespaciodeparqueoInput);
  }

  @Query(() => [Iespaciodeparqueo], { name: 'iespaciodeparqueo' })
  findAll():Promise<Iespaciodeparqueo[]> {
    return this.iespaciodeparqueoService.findAll();
  }

  @Query(() => Iespaciodeparqueo, { name: 'iespaciodeparqueo' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Iespaciodeparqueo> {
    return this.iespaciodeparqueoService.findOne(id);
  }

  @Mutation(() => Iespaciodeparqueo)
  updateIespaciodeparqueo(@Args('updateIespaciodeparqueoInput') updateIespaciodeparqueoInput: UpdateIespaciodeparqueoInput):Promise<Iespaciodeparqueo> {
    return this.iespaciodeparqueoService.update(updateIespaciodeparqueoInput.id, updateIespaciodeparqueoInput);
  }

  @Mutation(() => Iespaciodeparqueo)
  removeIespaciodeparqueo(@Args('id', { type: () => String }) id: string):Promise<Iespaciodeparqueo> {
    return this.iespaciodeparqueoService.remove(id);
  }
}
