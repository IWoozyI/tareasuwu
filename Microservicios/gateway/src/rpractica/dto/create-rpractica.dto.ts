import { IsString } from "class-validator";

export class CreateRpracticaDto {
    @IsString()
    Descripcion: string;
  
    @IsString()
    FechaDeInicio: string;
}
