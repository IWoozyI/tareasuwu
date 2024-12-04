import { AspiranteService } from './aspirante.service';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';
export declare class AspiranteController {
    private readonly aspiranteService;
    constructor(aspiranteService: AspiranteService);
    create(createAspiranteDto: CreateAspiranteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateAspiranteDto: UpdateAspiranteDto): string;
    remove(id: number): string;
}
