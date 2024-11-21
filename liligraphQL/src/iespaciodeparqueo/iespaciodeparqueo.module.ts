import { Module } from '@nestjs/common';
import { IespaciodeparqueoService } from './iespaciodeparqueo.service';
import { IespaciodeparqueoResolver } from './iespaciodeparqueo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Iespaciodeparqueo } from './entities/iespaciodeparqueo.entity';

@Module({
  providers: [IespaciodeparqueoResolver, IespaciodeparqueoService],
  imports:[TypeOrmModule.forFeature([Iespaciodeparqueo])],
  exports:[TypeOrmModule]
})
export class IespaciodeparqueoModule {}
