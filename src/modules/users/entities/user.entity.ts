import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Transaction } from '../../transactions/entities/transactions.untity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(()=> Category, (category)=> category.user, {onDelete: "CASCADE"})
  categories: Category[]

  @OneToMany(()=> Transaction, (transaction)=>{transaction.user}, {onDelete: "CASCADE"})
  transactions: Transaction[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}