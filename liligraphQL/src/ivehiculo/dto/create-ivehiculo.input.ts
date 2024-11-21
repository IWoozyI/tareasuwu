import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateIvehiculoInput {

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  placa: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  color: string
}
