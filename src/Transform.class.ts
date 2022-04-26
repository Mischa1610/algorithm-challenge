export class Transform {
  public static palindrome(N: number): number {
    if (Transform.isPalindrome(N)) {
      return N;
    } else {
      const minInput = 1;
      const maxInput = 10000;
      if (N < minInput || N > maxInput) {
        console.error(
          `${N} is not in the allowed range of ${minInput} to ${maxInput}`
        );
        return -1;
      } else {
        return Transform.recursionPalindrome(N);
      }
    }
  }

  private static recursionPalindrome(
    N: number,
    initialN = N,
    count = 1
  ): number {
    const maxValue = 1000000000;
    const rev = Transform.reverseNumber(N);
    const sum = N + rev;
    if (sum > maxValue) {
      console.error(
        `The palindrome could not be found for ${initialN} (searched until ${maxValue} and had ${count} turns).`
      );
      return -1;
    } else {
      return Transform.recursionPalindrome(sum, initialN, count + 1);
    }
  }

  public static isPalindrome(N: number): boolean {
    const S = String(N);
    for (let i = 0; i < S.length; i++) {
      if (S[i] !== S[S.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  public static reverseNumber(N: number): number {
    const S = String(N);
    let rev = '';
    for (let i = S.length - 1; i >= 0; i--) {
      rev += S[i];
    }
    return Number(rev);
  }
}
