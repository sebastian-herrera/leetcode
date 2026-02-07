import { expect, test } from 'vitest';
import { minStartValue } from './MinimumValueToGetPositiveStepByStepSum.ts';

test('minStartValue', () => {
  expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
  expect(minStartValue([1, 2])).toBe(1);
  expect(minStartValue([1, -2, -3])).toBe(5);
});
