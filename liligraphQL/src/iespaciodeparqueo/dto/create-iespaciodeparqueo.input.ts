import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateIespaciodeparqueoInput {

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion: string
}
