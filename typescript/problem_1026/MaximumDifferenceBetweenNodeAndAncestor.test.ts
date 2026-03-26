import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { maxAncestorDiff } from './MaximumDifferenceBetweenNodeAndAncestor.ts';

test('maxAncestorDiff', () => {
  expect(maxAncestorDiff(arrayToTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]))).toBe(7);
  expect(maxAncestorDiff(arrayToTree([1, null, 2, null, 0, 3]))).toBe(3);
  expect(maxAncestorDiff(arrayToTree([8, 3, 1, 6]))).toBe(7);
});
