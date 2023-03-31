import {  Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Task  extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  notes: string;

  @Column()
  completed:boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deadline:Date;

  @Column()
  id_Project : number;

}