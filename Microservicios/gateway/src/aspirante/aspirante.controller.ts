import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('aspirante')
export class AspiranteController {
  constructor(@Inject(NATS_SERVICE) private readonly client:ClientProxy) {}

  @Post()
  create(@Body() createAspiranteDto: CreateAspiranteDto) {
    return this.client.send({cmd: 'post-aspirante'}, createAspiranteDto);
  }

  @Get()
  async findAll() {
    return this.client.send({cmd:'get-aspirante'},{}).pipe(
      catchError((error)=>{
        throw new RpcException(error)
      })
    );
    // return this.aspiranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return  this.client.send({ cmd: 'find-aspirante' },{ id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      })
    );
    // return this.aspiranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAspiranteDto: UpdateAspiranteDto) {
    // return this.aspiranteService.update(+id, updateAspiranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'remove-aspirante' },{ id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      })
    )
    // return this.aspiranteService.remove(+id);
  }
}
