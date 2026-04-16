import { expect, test } from 'vitest';
import { validPath } from './FindIfPathExistsInGraph.ts';

test('validPath', () => {
  expect(
    validPath(
      3,
      [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      0,
      2,
    ),
  ).toBe(true);
  expect(
    validPath(
      6,
      [
        [0, 1],
        [0, 2],
        [3, 5],
        [5, 4],
        [4, 3],
      ],
      0,
      5,
    ),
  ).toBe(false);
  expect(
    validPath(
      10,
      [
        [0, 7],
        [0, 8],
        [6, 1],
        [2, 0],
        [0, 4],
        [5, 8],
        [4, 7],
        [1, 3],
        [3, 5],
        [6, 5],
      ],
      7,
      5,
    ),
  ).toBe(true);
});
