import { Entity, Column, OneToOne } from 'typeorm';
import { BaseEntity } from '../typing/base.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ unique: true })
  phone: number;

  @Column()
  active: boolean;

  @Column({
    name: 'last_login',
    type: 'timestamp',
  })
  lastLogin: Date;

  @OneToOne(() => Customer, (customer) => customer.user)
  customer!: Customer;
}
