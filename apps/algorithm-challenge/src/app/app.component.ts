import { IPalindrome, Message } from '@alekseew/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

import { Transform } from './transform/Transform.class';

@Component({
  selector: 'alekseew-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public hello$ = this.appService.apiHello();
  public palindrome$!: Observable<IPalindrome[]>;

  public numberInput = 0;

  public palindromeId = 0;

  public Transform = Transform;
  constructor(private readonly appService: AppService) {}

  public savePalindrome() {
    const palindrome = this.Transform.palindrome(this.numberInput);
    this.appService
      .savePalindrome({
        inputNumber: this.numberInput,
        palindrome: palindrome.palindrome,
        cycles: palindrome.recursionCount,
      })
      .subscribe((palindrome) => {
        this.palindromeId = palindrome.id;
      });
  }

  public getPalindromes() {
    this.palindrome$ = this.appService.getPalindromes();
  }

  public clearPalindromes() {
    this.appService.removeAll().subscribe(() => {
      this.getPalindromes();
    });
  }
}
