import { RolService } from './rol.service';
import { CreateRolInput } from './dto/create-rol.input';
import { UpdateRolInput } from './dto/update-rol.input';
export declare class RolResolver {
    private readonly rolService;
    constructor(rolService: RolService);
    createRol(createRolInput: CreateRolInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateRol(updateRolInput: UpdateRolInput): string;
    removeRol(id: number): string;
}
