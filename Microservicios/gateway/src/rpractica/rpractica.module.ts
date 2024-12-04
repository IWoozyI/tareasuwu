import { Module } from '@nestjs/common';
import { RpracticaController } from './rpractica.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [RpracticaController],
  imports:[NatsModule],
  providers: [],
})
export class RpracticaModule {}
