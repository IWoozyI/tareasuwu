import { Publicacion } from 'src/publicacion/entities/publicacion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class Comentario {
    id: string;
    contenido: string;
    fechayhora: string;
    ID_Usuario: string;
    usuario: Usuario;
    ID_Publicacion: string;
    publicacion: Publicacion;
}
