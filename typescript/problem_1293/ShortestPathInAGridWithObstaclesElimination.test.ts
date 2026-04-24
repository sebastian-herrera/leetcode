import { expect, test } from 'vitest';
import { shortestPath } from './ShortestPathInAGridWithObstaclesElimination.ts';

test('shortestPath', () => {
  expect(
    shortestPath(
      [
        [0, 0, 0],
        [1, 1, 0],
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
      1,
    ),
  ).toBe(6);
  expect(
    shortestPath(
      [
        [0, 1, 1],
        [1, 1, 1],
        [1, 0, 0],
      ],
      1,
    ),
  ).toBe(-1);
});
