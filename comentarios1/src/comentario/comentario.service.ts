import { Injectable } from '@nestjs/common';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class ComentarioService {

  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository:Repository<Comentario>
  ){}

// Método para generar el PDF con los comentarios reales
async generatePDFBuffer(): Promise<Buffer> {
  // Obtiene los comentarios de la base de datos
  const comentarios = await this.comentarioRepository.find({
    relations: ['usuario', 'publicacion'], // Asegúrate de cargar las relaciones (usuario y publicación)
  });

  // Crear el documento PDF
  const doc = new PDFDocument();
  const buffers = [];

  doc.on('data', (chunk) => buffers.push(chunk));
  doc.on('end', () => {});

  // Título del documento
  doc.fontSize(14).text('Reporte de Comentarios', { align: 'center' });
  doc.moveDown();

  // Recorrer cada comentario para agregarlo al PDF
  comentarios.forEach((comentario, index) => {
    // Añadir el contenido del comentario
    doc
      .fontSize(12)
      .text(`${index + 1}. ${comentario.contenido}`, { align: 'left' })
      .text(`Fecha: ${comentario.fechayhora}`, { align: 'left' })
      .text(`Usuario: ${comentario.usuario.nombre}`, { align: 'left' })
      .text(`Publicación: ${comentario.publicacion.titulo}`, { align: 'left' })
      .moveDown(); // Espacio entre comentarios
  });

  doc.end();

  // Devuelve el buffer generado
  return new Promise((resolve) => {
    doc.on('end', () => resolve(Buffer.concat(buffers)));
  });
}

  async create(createComentarioInput: CreateComentarioInput): Promise<Comentario> {
    const nuevo= this.comentarioRepository.create(createComentarioInput)
    return await this.comentarioRepository.save(nuevo);
  }

  async findAll(): Promise<Comentario[]> {
    return await this.comentarioRepository.find({
      relations:['usuario','publicacion']
    });
  }

  async findOne(id: string): Promise<Comentario> {
    return await this.comentarioRepository.findOne({where:{id}, relations:['usuario','publicacion']},);
  }

  async update(id: string, updateComentarioInput: UpdateComentarioInput): Promise<Comentario> {
    const actualizar=await this.comentarioRepository.preload(updateComentarioInput)
    if (!actualizar) {
      throw new Error ("Usuario no encontrado")
    }
    return await this.comentarioRepository.save(actualizar);
  }

  async remove(id: string): Promise<Comentario> {
    const borrar=await this.comentarioRepository.findOne({where:{id}})
    if (!borrar) {
      throw new Error ("Usuario no encontrado")
    }
    await this.comentarioRepository.remove(borrar);
    return {...borrar, id}
  }
}
