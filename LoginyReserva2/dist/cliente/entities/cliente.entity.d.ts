import { Reserva } from 'src/reserva/entities/reserva.entity';
export declare class Cliente {
    id: string;
    nombre: string;
    email: string;
    reservas: Reserva[];
}
