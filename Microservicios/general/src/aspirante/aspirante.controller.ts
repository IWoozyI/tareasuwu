import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AspiranteService } from './aspirante.service';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';
import { Aspirante } from './entities/aspirante.entity';

@Controller()
export class AspiranteController {
  constructor(private readonly aspiranteService: AspiranteService) {}

  @MessagePattern({cmd: 'post-aspirante'})
  async create(@Payload() createAspiranteDto: CreateAspiranteDto): Promise<Aspirante> {
    return this.aspiranteService.create(createAspiranteDto);
  }

  @MessagePattern({cmd:'get-aspirante'})
  async findAll(): Promise<Aspirante[]> {
    return this.aspiranteService.findAll();
  }

  @MessagePattern({ cmd: 'find-aspirante' })
  async findOne(@Payload() id: number): Promise<Aspirante> {
    return this.aspiranteService.findOne(id);
  }

  @MessagePattern('updateAspirante')
  async update(@Payload() updateAspiranteDto: UpdateAspiranteDto): Promise<Aspirante> {
    return this.aspiranteService.update(updateAspiranteDto.id, updateAspiranteDto);
  }

  @MessagePattern({ cmd: 'remove-aspirante' })
  async remove(@Payload() id: number): Promise<Aspirante> {
    return this.aspiranteService.remove(id);
  }
}
