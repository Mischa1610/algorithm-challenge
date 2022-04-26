import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palindrome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inputNumber: number;

  @Column()
  palindrome: number;

  @Column()
  cycles: number;
}
