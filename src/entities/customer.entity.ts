import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../typing/base.entity';
import { User } from './user.entity';

@Entity({ name: 'customer' })
export class Customer extends BaseEntity {
  @OneToOne(() => User, (user) => user.customer)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  nationalId: number;

  @Column()
  birthday: Date;

  @Column()
  address: string;
}
