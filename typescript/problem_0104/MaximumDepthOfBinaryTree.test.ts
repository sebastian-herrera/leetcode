import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { maxDepth } from './MaximumDepthOfBinaryTree.ts';

test('maxDepth', () => {
  expect(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
  expect(maxDepth(arrayToTree([1, null, 2]))).toBe(2);
});
