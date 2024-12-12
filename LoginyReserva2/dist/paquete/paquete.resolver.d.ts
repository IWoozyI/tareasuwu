import { PaqueteService } from './paquete.service';
import { Paquete } from './entities/paquete.entity';
import { CreatePaqueteInput } from './dto/create-paquete.input';
import { UpdatePaqueteInput } from './dto/update-paquete.input';
export declare class PaqueteResolver {
    private readonly paqueteService;
    constructor(paqueteService: PaqueteService);
    createPaquete(createPaqueteInput: CreatePaqueteInput): Promise<Paquete>;
    findAll(): Promise<Paquete[]>;
    findOne(id: string): Promise<Paquete>;
    updatePaquete(updatePaqueteInput: UpdatePaqueteInput): Promise<Paquete>;
    removePaquete(id: string): Promise<Paquete>;
}
