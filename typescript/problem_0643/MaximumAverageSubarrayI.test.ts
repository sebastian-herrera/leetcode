import { expect, test } from 'vitest';
import { findMaxAverage } from './MaximumAverageSubarrayI.ts';

test('findMaxAverage', () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);
  expect(findMaxAverage([5], 1)).toBe(5);
});
