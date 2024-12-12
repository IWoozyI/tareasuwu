import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaResolver } from './reserva.resolver';
import { Reserva } from './entities/reserva.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Paquete } from 'src/paquete/entities/paquete.entity';
import { ReservaGateway } from './reserva.gateway';

@Module({
  providers: [ReservaResolver, ReservaService, ReservaGateway],
  imports:[TypeOrmModule.forFeature([Reserva, Cliente, Paquete])],
  exports:[TypeOrmModule]
})
export class ReservaModule {}
