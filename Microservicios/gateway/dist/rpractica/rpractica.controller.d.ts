import { CreateRpracticaDto } from './dto/create-rpractica.dto';
import { UpdateRpracticaDto } from './dto/update-rpractica.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class RpracticaController {
    private readonly client;
    constructor(client: ClientProxy);
    create(createRpracticaDto: CreateRpracticaDto): import("rxjs").Observable<any>;
    findAll(): Promise<import("rxjs").Observable<any>>;
    findOne(id: string): void;
    update(id: string, updateRpracticaDto: UpdateRpracticaDto): void;
    remove(id: string): void;
}
