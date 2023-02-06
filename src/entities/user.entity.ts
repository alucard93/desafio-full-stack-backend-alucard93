//typeorm
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany  } from "typeorm";

//express-async-error
import { Exclude } from "class-transformer";

//entity
import Contact from "./contacts.entity";

@Entity('users') // nome da tabela
class User {  
    
    @PrimaryGeneratedColumn('uuid')
    readonly id: string 

    @Column({ length: 256 })
    name: string 

    @Column({ length: 256, unique: true })
    email: string

    @Column({ length: 16 })
    cellphone: string

    @Column({ length: 120 })
    @Exclude()
    password: string

    @Column({ default: false })
    isAdm: boolean = false

    @Column({ default: true } )
    isActive: boolean = true

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Contact, contact => contact.user)
    contact: Contact[]

}

export default User;