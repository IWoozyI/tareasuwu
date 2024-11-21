import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateIparquearInput {

  @Field(() => String)
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  espacioId: string
  
  @Field(() => String)
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  vehiculoId: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fechayhoradeentrada: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fechayhoradesalida: string
}
