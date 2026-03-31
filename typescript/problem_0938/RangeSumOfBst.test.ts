import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { rangeSumBST } from './RangeSumOfBst.ts';

test('rangeSumBST', () => {
  expect(rangeSumBST(arrayToTree([10, 5, 15, 3, 7, null, 18]), 7, 15)).toBe(32);
  expect(rangeSumBST(arrayToTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10)).toBe(23);
});
