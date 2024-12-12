import { ReservaService } from './reserva.service';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';
import { ReservaGateway } from './reserva.gateway';
export declare class ReservaResolver {
    private readonly reservaService;
    private readonly reservaGateway;
    constructor(reservaService: ReservaService, reservaGateway: ReservaGateway);
    createReserva(input: CreateReservaInput): Promise<Reserva>;
    findAll(): Promise<Reserva[]>;
    updateReserva(input: UpdateReservaInput): Promise<Reserva>;
    reservaCreada(): any;
    reservaActualizada(): any;
}
