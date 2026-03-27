import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { rightSideView } from './BinaryTreeRightSideView.ts';

test('rightSideView', () => {
  expect(rightSideView(arrayToTree([1, 2, 3, null, 5, null, 4]))).toEqual([1, 3, 4]);
  expect(rightSideView(arrayToTree([1, 2, 3, 4, null, null, null, 5]))).toEqual([1, 3, 4, 5]);
  expect(rightSideView(arrayToTree([1, null, 3]))).toEqual([1, 3]);
  expect(rightSideView(arrayToTree([]))).toEqual([]);
});
