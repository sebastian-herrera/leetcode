import { expect, test } from 'vitest';
import { missingNumber } from './MissingNumber.ts';

test('missingNumber', () => {
  expect(missingNumber([3, 0, 1])).toBe(2);
  expect(missingNumber([0, 1])).toBe(2);
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});
