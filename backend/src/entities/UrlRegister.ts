import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity("url_register")
export class UrlRegister {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  url_basic: string;
  
  @CreateDateColumn()
  created_on: Date;
}