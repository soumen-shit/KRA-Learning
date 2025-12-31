import { Course } from 'src/course/entities/course.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(() => Course, (course) => course.students)
  @JoinColumn()
  courses: Course[];
}
