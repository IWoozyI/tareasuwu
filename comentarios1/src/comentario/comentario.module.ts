import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioResolver } from './comentario.resolver';
import { Comentario } from './entities/comentario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioController } from './comentario.controller';

@Module({
  providers: [ComentarioResolver, ComentarioService],
  controllers:[ComentarioController],
  imports:[TypeOrmModule.forFeature([Comentario])],
  exports:[TypeOrmModule]
})
export class ComentarioModule {}
