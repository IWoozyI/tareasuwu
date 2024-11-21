import { CreateIvehiculoInput } from './create-ivehiculo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateIvehiculoInput extends PartialType(CreateIvehiculoInput) {

  @Field(() => ID)
  id: string;
}
