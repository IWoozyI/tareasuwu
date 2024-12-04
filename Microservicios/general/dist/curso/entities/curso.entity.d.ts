import { Inscripcion } from "src/inscripciones/entities/inscripcione.entity";
export declare class Curso {
    ID: number;
    Descripcion: string;
    FechaDeInicio: string;
    inscripciones: Inscripcion[];
}
