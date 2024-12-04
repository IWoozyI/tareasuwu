import { RpracticaService } from './rpractica.service';
import { CreateRpracticaDto } from './dto/create-rpractica.dto';
import { UpdateRpracticaDto } from './dto/update-rpractica.dto';
export declare class RpracticaController {
    private readonly rpracticaService;
    constructor(rpracticaService: RpracticaService);
    create(createRpracticaDto: CreateRpracticaDto): string;
    findAll(): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: number): string;
    update(updateRpracticaDto: UpdateRpracticaDto): string;
    remove(id: number): string;
}
