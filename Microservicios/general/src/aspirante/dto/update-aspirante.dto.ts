import { PartialType } from '@nestjs/mapped-types';
import { CreateAspiranteDto } from './create-aspirante.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateAspiranteDto extends PartialType(CreateAspiranteDto) {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsInt()
  identificacion?: number;
}
