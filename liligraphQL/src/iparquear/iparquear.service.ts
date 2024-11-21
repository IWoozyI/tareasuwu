import { Injectable } from '@nestjs/common';
import { CreateIparquearInput } from './dto/create-iparquear.input';
import { UpdateIparquearInput } from './dto/update-iparquear.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Iparquear } from './entities/iparquear.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IparquearService {

  constructor(
    @InjectRepository(Iparquear)
    private readonly iparquearRepository:Repository<Iparquear>
  ){}


  async create(createIparquearInput: CreateIparquearInput):Promise<Iparquear> {
    const nuevo= this.iparquearRepository.create(createIparquearInput);
    return await this.iparquearRepository.save(nuevo);
  }

  async findAll():Promise<Iparquear[]> {
    return await this.iparquearRepository.find();
  }

  async findOne(id: string):Promise<Iparquear> {
    return await this.iparquearRepository.findOneBy({id});
  }

  async update(id: string, updateIparquearInput: UpdateIparquearInput):Promise<Iparquear> {
    const cambio=await this.iparquearRepository.preload(updateIparquearInput);
    return await this.iparquearRepository.save(cambio);
  }

  async remove(id: string):Promise<Iparquear> {
    const erase=await this.iparquearRepository.findOne({where:{id}});
    return await this.iparquearRepository.remove(erase);
  }
}
