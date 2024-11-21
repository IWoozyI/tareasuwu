import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Iespaciodeparqueo } from 'src/iespaciodeparqueo/entities/iespaciodeparqueo.entity';
import { Ivehiculo } from 'src/ivehiculo/entities/ivehiculo.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'iparquear'})
export class Iparquear {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Iespaciodeparqueo, { eager: true })
  @JoinColumn({ name: 'espacioId' })
  @Field(() => Iespaciodeparqueo)
  espacio: Iespaciodeparqueo;

  @ManyToOne(() => Ivehiculo, { eager: true })
  @JoinColumn({ name: 'vehiculoId' })
  @Field(() => Ivehiculo)
  vehiculo: Ivehiculo;

  @Column()
  @Field(() => String)
  fechayhoradeentrada: string

  @Column()
  @Field(() => String)
  fechayhoradesalida: string
}
