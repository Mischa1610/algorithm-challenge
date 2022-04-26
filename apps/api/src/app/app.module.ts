import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Palindrome } from './palindrome/database/palindrome.entity';
import { PalindromeModule } from './palindrome/palindrome.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3336,
      username: 'root',
      database: 'test',
      entities: [Palindrome],
      synchronize: true,
    }),
    PalindromeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
