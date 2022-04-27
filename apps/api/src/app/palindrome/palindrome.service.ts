import { CreatePalindromeDto } from '@alekseew/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Palindrome } from './database/palindrome.entity';

@Injectable()
export class PalindromeService {
  constructor(
    @InjectRepository(Palindrome)
    private readonly palindromeRepository: Repository<Palindrome>
  ) {}

  create(createPalindromeDto: CreatePalindromeDto): Promise<Palindrome> {
    const palindrome = new Palindrome();
    palindrome.inputNumber = createPalindromeDto.inputNumber;
    palindrome.palindrome = createPalindromeDto.palindrome;
    palindrome.cycles = createPalindromeDto.cycles;

    return this.palindromeRepository.save(palindrome);
  }

  findAll(): Promise<Palindrome[]> {
    return this.palindromeRepository.find();
  }

  findOne(id: number): Promise<Palindrome> {
    return this.palindromeRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.palindromeRepository.delete(id);
  }

  async removeAll(): Promise<void> {
    await this.palindromeRepository.delete({});
  }
}
