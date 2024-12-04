import { Inscripcion } from "src/inscripciones/entities/inscripcione.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// Entidad Aspirante
@Entity('Aspirante')
export class Aspirante {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Nombre: string;

  @Column()
  Identificacion: number;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.aspirante)
  inscripciones: Inscripcion[];
}