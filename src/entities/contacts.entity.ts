//typeorm
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne  } from "typeorm";

//entity
import User from "./user.entity";

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({ length: 256 })
    name: string 

    @Column({ length: 256})
    email: string

    @Column({ length: 16 })
    cellphone: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User)
    user: User
}

export default Contact