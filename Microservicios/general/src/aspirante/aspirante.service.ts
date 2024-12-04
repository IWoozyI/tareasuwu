import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aspirante } from './entities/aspirante.entity';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';

@Injectable()
export class AspiranteService {
  constructor(
    @InjectRepository(Aspirante)
    private readonly aspiranteRepository: Repository<Aspirante>,
  ) {}

  async create(createAspiranteDto: CreateAspiranteDto): Promise<Aspirante> {
    const aspirante = this.aspiranteRepository.create(createAspiranteDto);
    return await this.aspiranteRepository.save(aspirante);
  }

  async findAll(): Promise<Aspirante[]> {
    return await this.aspiranteRepository.find();
  }

  async findOne(id: number): Promise<Aspirante> {
    const aspirante = await this.aspiranteRepository.findOne({ where: { ID: id } });
    if (!aspirante) {
      throw new NotFoundException('Aspirante no encontrado');
    }
    return aspirante;
  }

  async update(id: number, updateAspiranteDto: UpdateAspiranteDto): Promise<Aspirante> {
    const aspirante = await this.findOne(id);

    if (updateAspiranteDto.nombre) {
      aspirante.Nombre = updateAspiranteDto.nombre;
    }

    if (updateAspiranteDto.identificacion) {
      aspirante.Identificacion = updateAspiranteDto.identificacion;
    }

    return this.aspiranteRepository.save(aspirante);
  }

  async remove(id: number): Promise<Aspirante> {
    const aspirante = await this.findOne(id);
    return this.aspiranteRepository.remove(aspirante);
  }
}
