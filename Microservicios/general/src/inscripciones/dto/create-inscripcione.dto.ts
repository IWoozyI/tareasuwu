import { IsInt, IsString } from "class-validator";

export class CreateInscripcioneDto {
    @IsInt()
    ID_Curso: number;
  
    @IsInt()
    ID_Aspirante: number;
  
    @IsString()
    Fecha: string;
  
    @IsString()
    Hora: string;
  
    @IsInt()
    Valor_cancelado: number;
}
