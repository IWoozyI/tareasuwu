import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Publicacion } from 'src/publicacion/entities/publicacion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'comentario'})
export class Comentario {
  
  @PrimaryGeneratedColumn('uuid')  
  @Field(() => ID)
  id:string
  
  @Column()
  @Field(() => String)
  contenido:string

  @Column()
  @Field(() => String)
  fechayhora:string

  @Column()
  @Field(() => String)
  ID_Usuario: string

  @ManyToOne(()=> Usuario, (usuario)=> usuario.comentario, {onDelete: 'CASCADE'})
  @JoinColumn({name:'ID_Usuario'})
  @Field(() => Usuario)
  usuario: Usuario
  
  @Column()
  @Field(() => String)
  ID_Publicacion: string

  @ManyToOne(()=> Publicacion, (prublicacion)=> prublicacion.comentario, {onDelete: 'CASCADE'})
  @JoinColumn({name:'ID_Publicacion'})
  @Field(() => Publicacion)
  publicacion: Publicacion
}
