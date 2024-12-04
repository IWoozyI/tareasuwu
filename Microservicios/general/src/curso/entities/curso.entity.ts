import { Inscripcion } from "src/inscripciones/entities/inscripcione.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// Entidad Curso
@Entity('Curso')
export class Curso {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Descripcion: string;

  @Column()
  FechaDeInicio: string;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.curso)
  inscripciones: Inscripcion[];
}
