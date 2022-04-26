import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreatePalindromeDto } from './database/create-palindrome.dto';
import { Palindrome } from './database/palindrome.entity';
import { PalindromeService } from './palindrome.service';

@Controller()
export class PalindromeController {
  constructor(private readonly palindromeService: PalindromeService) {}

  @Post('palindrome')
  create(
    @Body() createPalindromeDto: CreatePalindromeDto
  ): Promise<Palindrome> {
    return this.palindromeService.create(createPalindromeDto);
  }

  @Get('palindrome')
  findAll(): Promise<Palindrome[]> {
    return this.palindromeService.findAll();
  }

  @Get('palindrome/:id')
  findOne(@Param('id') id: number): Promise<Palindrome> {
    return this.palindromeService.findOne(id);
  }

  @Delete('palindrome/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.palindromeService.remove(id);
  }
}
