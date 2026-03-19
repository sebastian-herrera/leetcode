import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { isSameTree } from './SameTree.ts';

test('isSameTree', () => {
  expect(isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]))).toBe(true);
  expect(isSameTree(arrayToTree([1, 2]), arrayToTree([1, null, 2]))).toBe(false);
  expect(isSameTree(arrayToTree([1, 2, 1]), arrayToTree([1, 1, 2]))).toBe(false);
  expect(isSameTree(arrayToTree([]), arrayToTree([]))).toBe(true);
});
