class Transform {
  public palindrome(N: number): number {
    return N;
  }

  private isPalindrome(N: number): boolean {
    const S = String(N);
    for (let i = 0; i < S.length; i++) {
      if (S[i] !== S[S.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
