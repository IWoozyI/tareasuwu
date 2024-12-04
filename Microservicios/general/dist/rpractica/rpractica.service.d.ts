import { CreateRpracticaDto } from './dto/create-rpractica.dto';
import { UpdateRpracticaDto } from './dto/update-rpractica.dto';
export declare class RpracticaService {
    create(createRpracticaDto: CreateRpracticaDto): string;
    findAll(): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateRpracticaDto: UpdateRpracticaDto): string;
    remove(id: number): string;
}
