import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';
export declare class AspiranteService {
    create(createAspiranteDto: CreateAspiranteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAspiranteDto: UpdateAspiranteDto): string;
    remove(id: number): string;
}
