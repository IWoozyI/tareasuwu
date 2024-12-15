import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';
import { Publicacion } from './entities/publicacion.entity';
import { Repository } from 'typeorm';
export declare class PublicacionService {
    private readonly publicacionRepository;
    constructor(publicacionRepository: Repository<Publicacion>);
    create(createPublicacionInput: CreatePublicacionInput): Promise<Publicacion>;
    findAll(): Promise<Publicacion[]>;
    findOne(id: string): Promise<Publicacion>;
    update(id: string, updatePublicacionInput: UpdatePublicacionInput): Promise<Publicacion>;
    remove(id: string): Promise<Publicacion>;
}
