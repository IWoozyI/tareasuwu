import { Injectable } from '@nestjs/common';
import { CreateIespaciodeparqueoInput } from './dto/create-iespaciodeparqueo.input';
import { UpdateIespaciodeparqueoInput } from './dto/update-iespaciodeparqueo.input';
import { Iespaciodeparqueo } from './entities/iespaciodeparqueo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IespaciodeparqueoService {

  constructor(
  @InjectRepository(Iespaciodeparqueo)
  private readonly iespaciodeparqueoRepository:Repository<Iespaciodeparqueo>
){}

  async create(createIespaciodeparqueoInput: CreateIespaciodeparqueoInput):Promise<Iespaciodeparqueo> {
    const nuevo= this.iespaciodeparqueoRepository.create(createIespaciodeparqueoInput);
    return await this.iespaciodeparqueoRepository.save(nuevo);
  }

  async findAll():Promise<Iespaciodeparqueo[]> {
    return await this.iespaciodeparqueoRepository.find();
  }

  async findOne(id: string):Promise<Iespaciodeparqueo> {
    return await this.iespaciodeparqueoRepository.findOneBy({id});
  }

  async update(id: string, updateIespaciodeparqueoInput: UpdateIespaciodeparqueoInput):Promise<Iespaciodeparqueo> {
    const cambio=await this.iespaciodeparqueoRepository.preload(updateIespaciodeparqueoInput);
    return await this.iespaciodeparqueoRepository.save(cambio);
  }

  async remove(id: string):Promise<Iespaciodeparqueo> {
    const erase=await this.iespaciodeparqueoRepository.findOne({where:{id}});
    return await this.iespaciodeparqueoRepository.save(erase);
  }
}
