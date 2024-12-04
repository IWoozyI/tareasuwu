import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcioneDto } from './dto/create-inscripcione.dto';
import { UpdateInscripcioneDto } from './dto/update-inscripcione.dto';

@Controller()
export class InscripcionesController {
  constructor(private readonly inscripcionesService: InscripcionesService) {}

  @MessagePattern('createInscripcione')
  create(@Payload() createInscripcioneDto: CreateInscripcioneDto) {
    return this.inscripcionesService.create(createInscripcioneDto);
  }

  @MessagePattern('findAllInscripciones')
  findAll() {
    return this.inscripcionesService.findAll();
  }

  @MessagePattern('findOneInscripcione')
  findOne(@Payload() id: number) {
    return this.inscripcionesService.findOne(id);
  }

  @MessagePattern('updateInscripcione')
  update(@Payload() updateInscripcioneDto: UpdateInscripcioneDto) {
    return this.inscripcionesService.update(updateInscripcioneDto.id, updateInscripcioneDto);
  }

  @MessagePattern('removeInscripcione')
  remove(@Payload() id: number) {
    return this.inscripcionesService.remove(id);
  }
}
