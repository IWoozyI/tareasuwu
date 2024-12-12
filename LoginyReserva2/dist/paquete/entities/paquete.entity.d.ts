import { Reserva } from 'src/reserva/entities/reserva.entity';
export declare class Paquete {
    id: string;
    descripcion: string;
    precio: string;
    reservas: Reserva[];
}
