import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RpracticaService } from './rpractica.service';
import { CreateRpracticaDto } from './dto/create-rpractica.dto';
import { UpdateRpracticaDto } from './dto/update-rpractica.dto';

@Controller()
export class RpracticaController {
  constructor(private readonly rpracticaService: RpracticaService) {}

  @MessagePattern('createRpractica')
  create(@Payload() createRpracticaDto: CreateRpracticaDto) {
    return this.rpracticaService.create(createRpracticaDto);
  }

  @MessagePattern({cmd:'get-rpractica'})
  findAll() {
    return this.rpracticaService.findAll();
  }

  @MessagePattern('findOneRpractica')
  findOne(@Payload() id: number) {
    return this.rpracticaService.findOne(id);
  }

  @MessagePattern('updateRpractica')
  update(@Payload() updateRpracticaDto: UpdateRpracticaDto) {
    return this.rpracticaService.update(updateRpracticaDto.id, updateRpracticaDto);
  }

  @MessagePattern('removeRpractica')
  remove(@Payload() id: number) {
    return this.rpracticaService.remove(id);
  }
}
