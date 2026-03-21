import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { minDepth } from './MinimumDepthOfBinaryTree.ts';

test('minDepth', () => {
  expect(minDepth(arrayToTree([3, 9, 20, null, null, 15, 7]))).toBe(2);
  expect(
    minDepth(arrayToTree([3, null, 20, 15, 7, 6, 1, null, 12, null, null, null, null, 2])),
  ).toBe(4);
  expect(minDepth(arrayToTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5);
  expect(minDepth(arrayToTree([]))).toBe(0);
});
