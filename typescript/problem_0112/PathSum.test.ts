import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { hasPathSum } from './PathSum.ts';

test('hasPathSum', () => {
  expect(hasPathSum(arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)).toBe(
    true,
  );
  expect(hasPathSum(arrayToTree([1, 2, 3]), 1)).toBe(false);
  expect(hasPathSum(arrayToTree([]), 1)).toBe(false);
});
