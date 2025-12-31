import { Student } from 'src/student/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  couseName: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
