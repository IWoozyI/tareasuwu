import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
export declare class ComentarioService {
    private readonly comentarioRepository;
    constructor(comentarioRepository: Repository<Comentario>);
    generatePDFBuffer(): Promise<Buffer>;
    create(createComentarioInput: CreateComentarioInput): Promise<Comentario>;
    findAll(): Promise<Comentario[]>;
    findOne(id: string): Promise<Comentario>;
    update(id: string, updateComentarioInput: UpdateComentarioInput): Promise<Comentario>;
    remove(id: string): Promise<Comentario>;
}
