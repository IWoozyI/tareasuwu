import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoDto } from './create-curso.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {
  id: number;
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  fechaDeInicio?: string;
}
