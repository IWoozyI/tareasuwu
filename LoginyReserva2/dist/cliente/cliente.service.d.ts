import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
export declare class ClienteService {
    private readonly clienteRepositorio;
    constructor(clienteRepositorio: Repository<Cliente>);
    create(createClienteInput: CreateClienteInput): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: string): Promise<Cliente>;
    update(id: string, updateClienteInput: UpdateClienteInput): Promise<Cliente>;
    remove(id: string): Promise<Cliente>;
}
