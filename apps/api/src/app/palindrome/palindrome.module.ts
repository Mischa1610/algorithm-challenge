import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PalindromeController } from './palindrome.controller';
import { Palindrome } from './database/palindrome.entity';
import { PalindromeService } from './palindrome.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palindrome])],
  controllers: [PalindromeController],
  providers: [PalindromeService],
})
export class PalindromeModule {}
