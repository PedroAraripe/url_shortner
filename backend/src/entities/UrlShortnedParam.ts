import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  BeforeInsert
} from "typeorm";
import { UrlRegister } from "./UrlRegister";
import { HelperHash } from "../helpers/hashHelper";

@Entity("url_shortned_param")
export class UrlShortnedParam extends HelperHash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url_register_id: number;

  @OneToOne(() => UrlRegister)
  @JoinColumn({name: "url_register_id"})
  url_register: UrlRegister;

  @Column()
  shortned_param: string;
  
  @CreateDateColumn()
  created_on: Date;

  @BeforeInsert()
  setShortnedParam() {
    this.shortned_param = this.intToHash(this.url_register_id);
  }
}