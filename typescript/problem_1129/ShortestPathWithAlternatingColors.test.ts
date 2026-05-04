import { expect, test } from 'vitest';
import { shortestAlternatingPaths } from './ShortestPathWithAlternatingColors.ts';

test('shortestAlternatingPaths', () => {
  expect(
    shortestAlternatingPaths(
      3,
      [
        [0, 1],
        [1, 2],
      ],
      [],
    ),
  ).toEqual([0, 1, -1]);
  expect(shortestAlternatingPaths(3, [[0, 1]], [[2, 1]])).toEqual([0, 1, -1]);
});
