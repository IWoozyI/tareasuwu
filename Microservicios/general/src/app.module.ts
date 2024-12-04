import { Module } from '@nestjs/common';
import { RpracticaModule } from './rpractica/rpractica.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { AspiranteModule } from './aspirante/aspirante.module';
import { CursoModule } from './curso/curso.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DB_SSL ==="require",
    }),
    RpracticaModule, InscripcionesModule, AspiranteModule, CursoModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
