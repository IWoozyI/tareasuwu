import { Module } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { InscripcionesController } from './inscripciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from 'src/curso/entities/curso.entity';
import { Aspirante } from 'src/aspirante/entities/aspirante.entity';
import { Inscripcion } from './entities/inscripcione.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Curso, Aspirante, Inscripcion]),],
  controllers: [InscripcionesController],
  providers: [InscripcionesService],
  exports: [TypeOrmModule],
})
export class InscripcionesModule {}
