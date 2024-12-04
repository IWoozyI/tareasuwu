import { IsString } from "class-validator";

export class CreateRpracticaDto {
    @IsString()
    name:string;
    @IsString()
    email:string;
}
