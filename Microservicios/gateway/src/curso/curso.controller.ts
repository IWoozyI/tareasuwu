import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ParseIntPipe } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('curso')
export class CursoController {
  constructor(@Inject(NATS_SERVICE) private readonly client:ClientProxy) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.client.send({cmd: 'post-curso'}, createCursoDto);
  }

  @Get()
  async findAll() {
    return this.client.send({cmd:'get-curso'},{}).pipe(
      catchError((error)=>{
        throw new RpcException(error)
      })
    );
    // return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return  this.client.send({ cmd: 'find-curso' },{ id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      })
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    // return this.cursoService.update(+id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.client.send({ cmd: 'remove-entity' },{ id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      })
    )
  }
}
