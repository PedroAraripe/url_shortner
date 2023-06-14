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
import { allowedCharsUrl } from "../constants";
@Entity("url_shortned_param")
export class UrlShortnedParam {
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

  intToHash(valueInt : number) : string {
    const hashedIntChars : string[] = [];
    
    let currentIntValue = valueInt - 1;
    
    while (currentIntValue > 0) {
      const rest = currentIntValue % allowedCharsUrl.length;
      currentIntValue = Math.floor(currentIntValue / allowedCharsUrl.length);

      hashedIntChars.push(allowedCharsUrl[rest])
    }

    return hashedIntChars.reverse().join("");
  }

  @BeforeInsert()
  setShortnedParam() {
    this.shortned_param = this.intToHash(this.url_register_id);
  }
}