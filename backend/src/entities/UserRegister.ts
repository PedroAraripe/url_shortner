import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from "bcryptjs";
@Entity("user_register")
export class UserRegister {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;
  
  @CreateDateColumn()
  created_on: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password.toString(), 8);
  }
}