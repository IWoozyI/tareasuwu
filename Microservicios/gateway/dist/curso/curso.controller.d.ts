import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class CursoController {
    private readonly client;
    constructor(client: ClientProxy);
    create(createCursoDto: CreateCursoDto): import("rxjs").Observable<any>;
    findAll(): Promise<import("rxjs").Observable<any>>;
    findOne(id: string): import("rxjs").Observable<any>;
    update(id: string, updateCursoDto: UpdateCursoDto): void;
    remove(id: number): import("rxjs").Observable<any>;
}
