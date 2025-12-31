import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prodName: string;

  @Column()
  orderQty: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn()
  user: User;
}
