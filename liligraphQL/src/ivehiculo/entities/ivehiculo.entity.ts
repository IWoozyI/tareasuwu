import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'ivehiculo'})
export class Ivehiculo {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  descripcion: string

  @Column()
  @Field(() => String)
  placa: string

  @Column()
  @Field(() => String)
  color: string
}
