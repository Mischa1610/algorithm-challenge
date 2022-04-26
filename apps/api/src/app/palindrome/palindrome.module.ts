import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Palindrome } from './database/palindrome.entity';
import { PalindromeController } from './palindrome.controller';
import { PalindromeService } from './palindrome.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palindrome])],
  controllers: [PalindromeController],
  providers: [PalindromeService],
})
export class PalindromeModule {}
