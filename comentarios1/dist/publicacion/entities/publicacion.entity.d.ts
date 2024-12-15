import { Comentario } from 'src/comentario/entities/comentario.entity';
export declare class Publicacion {
    id: string;
    titulo: string;
    contenido: string;
    fechapublicacion: string;
    comentario: Comentario;
}
