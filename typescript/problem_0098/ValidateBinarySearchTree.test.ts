import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { isValidBST } from './ValidateBinarySearchTree.ts';

test('isValidBST', () => {
  expect(isValidBST(arrayToTree([2, 1, 3]))).toBe(true);
  expect(isValidBST(arrayToTree([5, 1, 4, null, null, 3, 6]))).toBe(false);
  expect(isValidBST(arrayToTree([0]))).toBe(true);
  expect(isValidBST(arrayToTree([10, 5, 15, null, null, 6, 20]))).toBe(false);
});
