import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { diameterOfBinaryTree } from './DiameterOfBinaryTree.ts';

test('diameterOfBinaryTree', () => {
  expect(diameterOfBinaryTree(arrayToTree([1, 2, 3, 4, 5]))).toBe(3);
  expect(diameterOfBinaryTree(arrayToTree([1, 2]))).toBe(1);
  expect(diameterOfBinaryTree(arrayToTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]))).toBe(
    6,
  );
  expect(
    diameterOfBinaryTree(
      arrayToTree([1, 2, 3, null, null, 4, 5, 6, null, null, 7, 8, null, null, 9]), // path not pass through the `root`
    ),
  ).toBe(6);
});
