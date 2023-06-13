import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserHasUrl } from "./UserHasUrl";

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

  // @OneToMany(() => UserHasUrl, userHasUrls => UserHasUrl)
  // userHasUrls: UserHasUrl[];
  
}