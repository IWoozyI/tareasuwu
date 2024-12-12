import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
export declare class ClienteResolver {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    createCliente(createClienteInput: CreateClienteInput): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: string): Promise<Cliente>;
    updateCliente(updateClienteInput: UpdateClienteInput): Promise<Cliente>;
    removeCliente(id: string): Promise<Cliente>;
}
