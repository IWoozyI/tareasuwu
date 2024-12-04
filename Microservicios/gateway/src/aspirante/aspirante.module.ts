import { Module } from '@nestjs/common';
import { AspiranteController } from './aspirante.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [AspiranteController],
  imports:[NatsModule],
  providers: [],
})
export class AspiranteModule {}
