import { IPalindrome } from '@alekseew/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palindrome implements IPalindrome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inputNumber: number;

  @Column()
  palindrome: number;

  @Column()
  cycles: number;
}
