import { PartialType } from '@nestjs/mapped-types';
import { CreateRpracticaDto } from './create-rpractica.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRpracticaDto extends PartialType(CreateRpracticaDto) {
    id: number;
    @IsOptional()
    @IsString()
    descripcion?: string;
  
    @IsOptional()
    @IsString()
    fechaDeInicio?: string;
}
