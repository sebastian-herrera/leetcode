import { expect, test } from 'vitest';
import { nearestExit } from './NearestExitFromEntranceInMaze.ts';

test('nearestExit', () => {
  expect(
    nearestExit(
      [
        ['+', '+', '.', '+'],
        ['.', '.', '.', '+'],
        ['+', '+', '+', '.'],
      ],
      [1, 2],
    ),
  ).toBe(1);
  expect(
    nearestExit(
      [
        ['+', '+', '+'],
        ['.', '.', '.'],
        ['+', '+', '+'],
      ],
      [1, 0],
    ),
  ).toBe(2);
  expect(nearestExit([['.', '+']], [0, 0])).toBe(-1);
});
