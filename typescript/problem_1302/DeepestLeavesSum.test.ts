import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { deepestLeavesSum } from './DeepestLeavesSum.ts';

test('deepestLeavesSum', () => {
  expect(
    deepestLeavesSum(arrayToTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])),
  ).toBe(15);
  expect(
    deepestLeavesSum(arrayToTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])),
  ).toBe(19);
});
