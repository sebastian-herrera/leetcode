import { expect, test } from 'vitest';
import { minReorder } from './ReorderRoutesToMakeAllPathsLeadToTheCityZero.ts';

test('minReorder', () => {
  expect(
    minReorder(6, [
      [0, 1],
      [1, 3],
      [2, 3],
      [4, 0],
      [4, 5],
    ]),
  ).toBe(3);
  expect(
    minReorder(5, [
      [1, 0],
      [1, 2],
      [3, 2],
      [3, 4],
    ]),
  ).toBe(2);
  expect(
    minReorder(3, [
      [1, 0],
      [2, 0],
    ]),
  ).toBe(0);
});
