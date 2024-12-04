import { Module } from '@nestjs/common';
import { RpracticaService } from './rpractica.service';
import { RpracticaController } from './rpractica.controller';

@Module({
  controllers: [RpracticaController],
  providers: [RpracticaService],
})
export class RpracticaModule {}
