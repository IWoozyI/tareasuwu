import { UsuarioService } from './usuario.service';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
export declare class UsuarioResolver {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    createUsuario(createUsuarioInput: CreateUsuarioInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateUsuario(updateUsuarioInput: UpdateUsuarioInput): string;
    removeUsuario(id: number): string;
}
