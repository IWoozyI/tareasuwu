import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComentarioService } from './comentario.service';
import { Comentario } from './entities/comentario.entity';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';
import { Response } from 'express';
import { Res } from '@nestjs/common';

@Resolver(() => Comentario)
export class ComentarioResolver {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Mutation(() => Comentario)
  createComentario(@Args('createComentarioInput') createComentarioInput: CreateComentarioInput): Promise<Comentario> {
    return this.comentarioService.create(createComentarioInput);
  }

  @Query(() => String, { name: 'getComentariosPDFLink' })
  getComentariosPDFLink(): string {
    // Devuelve la URL de la ruta REST
    return 'http://localhost:3000/comentarios/pdf';
  }

  @Query(() => [Comentario], { name: 'comentarios' })
  findAll(): Promise<Comentario[]> {
    return this.comentarioService.findAll();
  }

  @Query(() => Comentario, { name: 'comentario' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Comentario> {
    return this.comentarioService.findOne(id);
  }

  @Mutation(() => Comentario)
  updateComentario(@Args('updateComentarioInput') updateComentarioInput: UpdateComentarioInput): Promise<Comentario> {
    return this.comentarioService.update(updateComentarioInput.id, updateComentarioInput);
  }

  @Mutation(() => Comentario)
  removeComentario(@Args('id', { type: () => String }) id: string): Promise<Comentario> {
    return this.comentarioService.remove(id);
  }
}
