import {  Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany,JoinColumn, ManyToOne } from 'typeorm';

import { Project } from './Project';

@Entity()
export class User  extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

}
