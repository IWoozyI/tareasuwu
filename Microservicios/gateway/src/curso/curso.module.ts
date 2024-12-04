import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [CursoController],
  imports:[NatsModule],
  providers: [],
})
export class CursoModule {}
