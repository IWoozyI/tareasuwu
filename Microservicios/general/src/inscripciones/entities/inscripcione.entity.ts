import { Aspirante } from "src/aspirante/entities/aspirante.entity";
import { Curso } from "src/curso/entities/curso.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Inscripcion')
export class Inscripcion {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  ID_Curso: number;

  @ManyToOne(() => Curso, (curso) => curso.inscripciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ID_Curso' })
  curso: Curso;

  @Column()
  ID_Aspirante: number;

  @ManyToOne(() => Aspirante, (aspirante) => aspirante.inscripciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ID_Aspirante' })
  aspirante: Aspirante;

  @Column()
  Fecha: string;

  @Column()
  Hora: string;

  @Column()
  Valor_cancelado: number;
}