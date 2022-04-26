export interface Message {
  message: string;
}

export class CreatePalindromeDto {
  inputNumber: number;
  palindrome: number;
  cycles: number;
}

export interface IPalindrome {
  id: number;
  inputNumber: number;
  palindrome: number;
  cycles: number;
}
