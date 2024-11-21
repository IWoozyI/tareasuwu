import { CreateIespaciodeparqueoInput } from './create-iespaciodeparqueo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateIespaciodeparqueoInput extends PartialType(CreateIespaciodeparqueoInput) {

  @Field(() => ID)
  id: string;
}
