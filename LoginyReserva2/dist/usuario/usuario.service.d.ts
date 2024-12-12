import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
export declare class UsuarioService {
    create(createUsuarioInput: CreateUsuarioInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsuarioInput: UpdateUsuarioInput): string;
    remove(id: number): string;
}
