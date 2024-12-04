import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';
export declare class CursoController {
    private readonly cursoService;
    constructor(cursoService: CursoService);
    create(createCursoDto: CreateCursoDto): Promise<Curso>;
    findAll(): Promise<Curso[]>;
    findOne(id: number): Promise<Curso>;
    update(updateCursoDto: UpdateCursoDto): Promise<Curso>;
    remove(id: number): Promise<Curso>;
}
