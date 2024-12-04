import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-curso.dto';
import { Curso } from './entities/curso.entity';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  // Crear un nuevo Curso
  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const curso = this.cursoRepository.create(createCursoDto);
    return this.cursoRepository.save(curso);
  }

  // Obtener todos los Cursos
  async findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  // Obtener un Curso por ID
  async findOne(id: number): Promise<Curso> {
    return this.cursoRepository.findOneBy({ ID: id });
  }

  // Actualizar un Curso
  async update(id: number, updateCursoDto: UpdateCursoDto): Promise<Curso> {
    const curso = await this.cursoRepository.findOneBy({ ID: id });
    if (!curso) {
      throw new Error('Curso no encontrado');
    }
    
    // Actualiza solo los campos proporcionados
    if (updateCursoDto.descripcion) {
      curso.Descripcion = updateCursoDto.descripcion;
    }
    if (updateCursoDto.fechaDeInicio) {
      curso.FechaDeInicio = updateCursoDto.fechaDeInicio;
    }
  
    // Guarda los cambios
    return this.cursoRepository.save(curso);
  }

  // Eliminar un Curso
  async remove(id: number): Promise<Curso> {
    const curso = await this.cursoRepository.findOneBy({ ID: id });
    if (!curso) {
      throw new Error('Curso no encontrado');
    }
    await this.cursoRepository.delete(id);
    return curso;  // Devolvemos el curso eliminado
  }
}
