import { Injectable } from '@nestjs/common';
import { CreateIvehiculoInput } from './dto/create-ivehiculo.input';
import { UpdateIvehiculoInput } from './dto/update-ivehiculo.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Ivehiculo } from './entities/ivehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IvehiculoService {

  constructor(
    @InjectRepository(Ivehiculo)
    private readonly ivehiculoRepository:Repository<Ivehiculo>
  ){}

  async create(createIvehiculoInput: CreateIvehiculoInput):Promise<Ivehiculo> {
    const nuevo= this.ivehiculoRepository.create(createIvehiculoInput);
    return await this.ivehiculoRepository.save(nuevo);
  }

  async findAll():Promise<Ivehiculo[]> {
    return await this.ivehiculoRepository.find();
  }

  async findOne(id: string):Promise<Ivehiculo> {
    return await this.ivehiculoRepository.findOneBy({id});
  }

  async update(id: string, updateIvehiculoInput: UpdateIvehiculoInput):Promise<Ivehiculo> {
    const cambio=await this.ivehiculoRepository.preload(updateIvehiculoInput);
    return await this.ivehiculoRepository.save(cambio);
  }

  async remove(id: string):Promise<Ivehiculo> {
    const erase=await this.ivehiculoRepository.findOne({where:{id}});
    return await this.ivehiculoRepository.remove(erase);
  }
}
