import { CreateRolInput } from './dto/create-rol.input';
import { UpdateRolInput } from './dto/update-rol.input';
export declare class RolService {
    create(createRolInput: CreateRolInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRolInput: UpdateRolInput): string;
    remove(id: number): string;
}
