import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
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

  @ManyToOne(() => UserRegister, user => user.id)
  @JoinColumn({name: "user_id"})
  user: UserRegister;

  @ManyToOne(() => UrlRegister, url => url.id)
  @JoinColumn({name: "url_register_id"})
  url_register: UrlRegister;
}