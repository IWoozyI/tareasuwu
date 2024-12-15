import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario>;
    update(id: string, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario>;
    remove(id: string): Promise<Usuario>;
}
