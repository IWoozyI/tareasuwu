import { CreateRpracticaDto } from './create-rpractica.dto';
declare const UpdateRpracticaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRpracticaDto>>;
export declare class UpdateRpracticaDto extends UpdateRpracticaDto_base {
    id: number;
    descripcion?: string;
    fechaDeInicio?: string;
}
export {};
