import { expect, test } from 'vitest';
import { maximumDetonation } from './DetonateTheMaximumBombs.ts';

test('maximumDetonation', () => {
  expect(
    maximumDetonation([
      [2, 1, 3],
      [6, 1, 4],
    ]),
  ).toBe(2);
  expect(
    maximumDetonation([
      [1, 1, 5],
      [10, 10, 5],
    ]),
  ).toBe(1);
  expect(
    maximumDetonation([
      [1, 2, 3],
      [2, 3, 1],
      [3, 4, 2],
      [4, 5, 3],
      [5, 6, 4],
    ]),
  ).toBe(5);
});
