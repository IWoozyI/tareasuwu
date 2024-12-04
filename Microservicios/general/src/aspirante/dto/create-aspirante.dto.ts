import { IsString, IsInt } from 'class-validator';

export class CreateAspiranteDto {
  @IsString()
  Nombre: string;

  @IsInt()
  Identificacion: number;
}
