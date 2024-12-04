import { Injectable } from '@nestjs/common';
import { CreateRpracticaDto } from './dto/create-rpractica.dto';
import { UpdateRpracticaDto } from './dto/update-rpractica.dto';

const rpractica=[
  {
    id:1,
    name: 'Pedro',
    email:'a'
  },
  {
    id:2,
    name: 'Julio',
    email:'b'
  }
]



@Injectable()
export class RpracticaService {
  create(createRpracticaDto: CreateRpracticaDto) {
    return 'This action adds a new rpractica';
  }

  findAll() {
    return rpractica;
  }

  findOne(id: number) {
    return `This action returns a #${id} rpractica`;
  }

  update(id: number, updateRpracticaDto: UpdateRpracticaDto) {
    return `This action updates a #${id} rpractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} rpractica`;
  }
}
