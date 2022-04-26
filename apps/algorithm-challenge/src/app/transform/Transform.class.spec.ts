import { Transform } from './Transform.class';

describe('Transform Class', () => {
  it('should reverse given number', () => {
    const result = Transform.reverseNumber(123);
    expect(result).toBe(321);

    const result2 = Transform.reverseNumber(321);
    expect(result2).toBe(123);

    const result3 = Transform.reverseNumber(1234);
    expect(result3).toBe(4321);

    const result4 = Transform.reverseNumber(28);
    expect(result4).toBe(82);
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

  it('should return the palindrome of given number', () => {
    const result = Transform.palindrome(28);
    expect(result).toBe(121);

    const result2 = Transform.palindrome(34543);
    expect(result2).toBe(34543);

    const result3 = Transform.palindrome(196);
    expect(result3).toBe(-1);

    const result4 = Transform.palindrome(1221);
    expect(result4).toBe(1221);

    const result5 = Transform.palindrome(51);
    expect(result5).toBe(66);

    const result6 = Transform.palindrome(11);
    expect(result6).toBe(11);

    const result7 = Transform.palindrome(607);
    expect(result7).toBe(4444);
  });
});
