import { ComentarioService } from './comentario.service';
import { Comentario } from './entities/comentario.entity';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';
export declare class ComentarioResolver {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    createComentario(createComentarioInput: CreateComentarioInput): Promise<Comentario>;
    getComentariosPDFLink(): string;
    findAll(): Promise<Comentario[]>;
    findOne(id: string): Promise<Comentario>;
    updateComentario(updateComentarioInput: UpdateComentarioInput): Promise<Comentario>;
    removeComentario(id: string): Promise<Comentario>;
}
