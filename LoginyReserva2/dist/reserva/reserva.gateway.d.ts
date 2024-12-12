import { Server } from 'socket.io';
export declare class ReservaGateway {
    server: Server;
    emitReservaActualizada(event: string, data: any): void;
}
