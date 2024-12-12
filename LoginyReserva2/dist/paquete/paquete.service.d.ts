import { CreatePaqueteInput } from './dto/create-paquete.input';
import { UpdatePaqueteInput } from './dto/update-paquete.input';
import { Paquete } from './entities/paquete.entity';
import { Repository } from 'typeorm';
export declare class PaqueteService {
    private readonly paqueteRepository;
    constructor(paqueteRepository: Repository<Paquete>);
    create(createPaqueteInput: CreatePaqueteInput): Promise<Paquete>;
    findAll(): Promise<Paquete[]>;
    findOne(id: string): Promise<Paquete>;
    update(id: string, updatePaqueteInput: UpdatePaqueteInput): Promise<Paquete>;
    remove(id: string): Promise<Paquete>;
}
