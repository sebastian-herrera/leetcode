import { expect, test } from 'vitest';
import { snakesAndLadders } from './SnakesAndLadders.ts';

test('snakesAndLadders', () => {
  expect(
    snakesAndLadders([
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 35, -1, -1, 13, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 15, -1, -1, -1, -1],
    ]),
  ).toBe(4);
  expect(
    snakesAndLadders([
      [-1, -1],
      [-1, 3],
    ]),
  ).toBe(1);
});
