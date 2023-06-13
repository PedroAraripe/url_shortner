import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany
} from "typeorm";
import { UrlRegister } from "./UrlRegister";
import { UserRegister } from "./UserRegister";

@Entity("url_access_log")
export class UrlAcessLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url_register_id: number;

  @Column()
  user_id: number;
  
  @CreateDateColumn()
  created_on: Date;

  @ManyToMany(() => UrlRegister)
  @JoinColumn({name: "url_register_id"})
  url_register: UrlRegister;
  
  @ManyToMany(() => UserRegister)
  @JoinColumn({name: "user_id"})
  user: UserRegister;
}