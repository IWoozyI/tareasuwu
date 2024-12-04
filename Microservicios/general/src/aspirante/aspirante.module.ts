import { Module } from '@nestjs/common';
import { AspiranteService } from './aspirante.service';
import { AspiranteController } from './aspirante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspirante } from './entities/aspirante.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aspirante]),],
  controllers: [AspiranteController],
  providers: [AspiranteService],
  exports: [TypeOrmModule],
})
export class AspiranteModule {}
