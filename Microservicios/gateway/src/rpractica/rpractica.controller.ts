import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateRpracticaDto } from './dto/create-rpractica.dto';
import { UpdateRpracticaDto } from './dto/update-rpractica.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('rpractica')
export class RpracticaController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client:ClientProxy
  ) {}

  @Post()
  create(@Body() createRpracticaDto: CreateRpracticaDto) {
    return this.client.send({cmd: 'post-rpractica'}, createRpracticaDto)
  }

  @Get()
  async findAll() {
    return this.client.send({cmd:'get-rpractica'},{}).pipe(
      catchError((error)=>{
        throw new RpcException(error)
      })
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRpracticaDto: UpdateRpracticaDto) {

  }

  @Delete(':id')
  remove(@Param('id') id: string) {

  }
}
