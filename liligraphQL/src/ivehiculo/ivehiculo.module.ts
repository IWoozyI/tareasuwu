import { Module } from '@nestjs/common';
import { IvehiculoService } from './ivehiculo.service';
import { IvehiculoResolver } from './ivehiculo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ivehiculo } from './entities/ivehiculo.entity';


@Module({
  providers: [IvehiculoResolver, IvehiculoService],
  imports:[TypeOrmModule.forFeature([Ivehiculo])],
  exports:[TypeOrmModule]
})
export class IvehiculoModule {}
