import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Comentario } from 'src/comentario/entities/comentario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'publiacion'})
export class Publicacion {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string

  @Column()
  @Field(() => String)
  titulo:string
  
  @Column()
  @Field(() => String)
  contenido:string

  @Column()
  @Field(() => String)
  fechapublicacion:string

  @Field(() => [Comentario])
  @OneToMany(()=> Comentario, (comentario)=>comentario.usuario)
  comentario: Comentario

}
