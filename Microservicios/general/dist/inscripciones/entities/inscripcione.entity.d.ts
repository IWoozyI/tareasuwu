import { Aspirante } from "src/aspirante/entities/aspirante.entity";
import { Curso } from "src/curso/entities/curso.entity";
export declare class Inscripcion {
    ID: number;
    ID_Curso: number;
    curso: Curso;
    ID_Aspirante: number;
    aspirante: Aspirante;
    Fecha: string;
    Hora: string;
    Valor_cancelado: number;
}
