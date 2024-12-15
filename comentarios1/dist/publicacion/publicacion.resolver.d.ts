import { PublicacionService } from './publicacion.service';
import { Publicacion } from './entities/publicacion.entity';
import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';
export declare class PublicacionResolver {
    private readonly publicacionService;
    constructor(publicacionService: PublicacionService);
    createPublicacion(createPublicacionInput: CreatePublicacionInput): Promise<Publicacion>;
    findAll(): Promise<Publicacion[]>;
    findOne(id: string): Promise<Publicacion>;
    updatePublicacion(updatePublicacionInput: UpdatePublicacionInput): Promise<Publicacion>;
    removePublicacion(id: string): Promise<Publicacion>;
}
