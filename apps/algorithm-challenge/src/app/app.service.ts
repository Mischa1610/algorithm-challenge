import {
  CreatePalindromeDto,
  IPalindrome,
  Message,
} from '@alekseew/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}

  public apiHello() {
    return this.http.get<Message>('/api/hello');
  }

  public savePalindrome(createPalindromeDto: CreatePalindromeDto) {
    return this.http.post<IPalindrome>('/api/palindrome', createPalindromeDto);
  }

  public getPalindromes() {
    return this.http.get<IPalindrome[]>('/api/palindrome');
  }

  public removeAll() {
    return this.http.delete('/api/palindrome');
  }
}
