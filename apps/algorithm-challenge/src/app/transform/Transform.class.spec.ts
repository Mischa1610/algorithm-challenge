import { Transform } from './Transform.class';

describe('Transform Class', () => {
  it('should reverse given number', () => {
    const result = Transform.reverseNumber(123);
    expect(result).toBe(321);

    const result2 = Transform.reverseNumber(321);
    expect(result2).toBe(123);

    const result3 = Transform.reverseNumber(1234);
    expect(result3).toBe(4321);
  });

  it('should return true if given number is palindrome', () => {
    const result = Transform.isPalindrome(123);
    expect(result).toBe(false);

    const result2 = Transform.isPalindrome(121);
    expect(result2).toBe(true);

    const result3 = Transform.isPalindrome(1234);
    expect(result3).toBe(false);

    const result4 = Transform.isPalindrome(1221);
    expect(result4).toBe(true);
  });
});
