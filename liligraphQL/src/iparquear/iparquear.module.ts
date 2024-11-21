import { Module } from '@nestjs/common';
import { IparquearService } from './iparquear.service';
import { IparquearResolver } from './iparquear.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Iparquear } from './entities/iparquear.entity';

@Module({
  providers: [IparquearResolver, IparquearService],
  imports:[TypeOrmModule.forFeature([Iparquear])],
  exports:[TypeOrmModule]
})
export class IparquearModule {}
