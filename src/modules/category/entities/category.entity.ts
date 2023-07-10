import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "../../users/entities/user.entity";
import { Transaction } from "../../transactions/entities/transactions.untity";


@Entity()
export class Category{
    @PrimaryGeneratedColumn({name: 'category_id'})
    id: number

    @ManyToOne(()=> User, (user) => user.categories)
    @JoinColumn({ name: 'user_id'})
    user: User

    @OneToMany(()=>Transaction, (transaction)=> transaction.category)
    transactions: Transaction[]

    @Column()
    title: string

    @CreateDateColumn()
    createdAt: Date

}