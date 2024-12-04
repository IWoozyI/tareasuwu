import { Module } from '@nestjs/common';
import { RpracticaModule } from './rpractica/rpractica.module';
import { NatsModule } from './transports/nats.module';
import { CursoModule } from './curso/curso.module';
import { AspiranteModule } from './aspirante/aspirante.module';


@Module({
  imports: [RpracticaModule,NatsModule, CursoModule, AspiranteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
