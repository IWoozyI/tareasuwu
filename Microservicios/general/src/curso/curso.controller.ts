import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Controller()
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  // Crear un nuevo curso
  @MessagePattern({cmd:'post-curso'})
  async create(@Payload() createCursoDto: CreateCursoDto): Promise<Curso> {
    return this.cursoService.create(createCursoDto);
  }

  // Obtener todos los cursos
  @MessagePattern({cmd:'get-curso'})
  async findAll(): Promise<Curso[]> {
    return this.cursoService.findAll();
  }

  // Obtener un curso por su ID
  @MessagePattern({ cmd: 'find-curso' })
  async findOne(@Payload() id: number): Promise<Curso> {
    return this.cursoService.findOne(id);
  }

  // Actualizar un curso
  @MessagePattern('updateCurso')
  async update(@Payload() updateCursoDto: UpdateCursoDto): Promise<Curso> {
    return this.cursoService.update(updateCursoDto.id, updateCursoDto);
  }

  // Eliminar un curso
  @MessagePattern({ cmd: 'remove-entity' })
  async remove(@Payload() id: number): Promise<Curso> {
    return this.cursoService.remove(id);
  }
}
