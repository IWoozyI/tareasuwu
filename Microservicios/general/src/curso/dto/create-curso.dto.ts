import { IsString } from 'class-validator';

export class CreateCursoDto {
  @IsString()
  Descripcion: string;

  @IsString()
  FechaDeInicio: string;
}

