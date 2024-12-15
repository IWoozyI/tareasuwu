import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { UsuarioGateway } from './usuario.gateway';
export declare class UsuarioResolver {
    private readonly usuarioService;
    private readonly usuarioGateway;
    constructor(usuarioService: UsuarioService, usuarioGateway: UsuarioGateway);
    createUsuario(createUsuarioInput: CreateUsuarioInput): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario>;
    updateUsuario(updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario>;
    removeUsuario(id: string): Promise<Usuario>;
}
