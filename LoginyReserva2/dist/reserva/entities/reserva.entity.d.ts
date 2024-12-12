import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Paquete } from 'src/paquete/entities/paquete.entity';
export declare class Reserva {
    id: string;
    fechareserva: string;
    ID_Cliente: string;
    cliente: Cliente;
    ID_Paquete: string;
    paquete: Paquete;
}
