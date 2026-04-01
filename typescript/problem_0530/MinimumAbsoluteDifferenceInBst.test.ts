import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { getMinimumDifference } from './MinimumAbsoluteDifferenceInBst.ts';

test('getMinimumDifference', () => {
  expect(getMinimumDifference(arrayToTree([4, 2, 6, 1, 3]))).toBe(1);
  expect(getMinimumDifference(arrayToTree([1, 0, 48, null, null, 12, 49]))).toBe(1);
  expect(getMinimumDifference(arrayToTree([4, 2, 6, 0]))).toBe(2);
});
