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
});
