import { PartialType } from '@nestjs/mapped-types';
import { CreateRpracticaDto } from './create-rpractica.dto';
import { IsNumber } from 'class-validator';

export class UpdateRpracticaDto extends PartialType(CreateRpracticaDto) {
  @IsNumber()
  id: number;
}
