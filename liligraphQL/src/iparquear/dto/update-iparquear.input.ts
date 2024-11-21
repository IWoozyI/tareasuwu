import { CreateIparquearInput } from './create-iparquear.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateIparquearInput extends PartialType(CreateIparquearInput) {

  @Field(() => ID)
  id: string;
}
