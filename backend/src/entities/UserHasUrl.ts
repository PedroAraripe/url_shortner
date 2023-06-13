import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToOne
} from "typeorm";
import { UrlRegister } from "./UrlRegister";
import { UserRegister } from "./UserRegister";
import { UrlShortnedParam } from "./UrlShortnedParam";

@Entity("user_has_url")
export class UserHasUrl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url_register_id: number;

  @Column()
  user_id: number;
  
  @CreateDateColumn()
  created_on: Date;

  // @ManyToMany(() => UrlRegister)
  // @JoinTable()
  // url_register: UrlRegister[]
  @ManyToOne(() => UserRegister, user => user.id)
  @JoinColumn({name: "user_id"})
  user: UserRegister;

  @ManyToOne(() => UrlRegister, url => url.id)
  @JoinColumn({name: "url_register_id"})
  url_register: UrlRegister;

  // @ManyToOne(() => UrlShortnedParam, url => url.url_register_id)
  // @JoinColumn({name: "url_register_id"})
  // url_register: UrlShortnedParam;
}