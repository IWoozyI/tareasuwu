import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';
export declare class ReservaService {
    private readonly reservaRepository;
    constructor(reservaRepository: Repository<Reserva>);
    create(createReservaInput: CreateReservaInput): Promise<Reserva>;
    findAll(): Promise<Reserva[]>;
    findOne(id: string): Promise<Reserva>;
    update(id: string, updateReservaInput: UpdateReservaInput): Promise<Reserva>;
    remove(id: string): Promise<Reserva>;
}
