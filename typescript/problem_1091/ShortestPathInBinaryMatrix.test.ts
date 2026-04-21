import { expect, test } from 'vitest';
import { shortestPathBinaryMatrix } from './ShortestPathInBinaryMatrix.ts';

test('shortestPathBinaryMatrix', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 1],
      [1, 0],
    ]),
  ).toBe(2);
  expect(
    shortestPathBinaryMatrix([
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]),
  ).toBe(4);
  expect(
    shortestPathBinaryMatrix([
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]),
  ).toBe(-1);
  expect(
    shortestPathBinaryMatrix([
      [0, 0, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 1],
      [0, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0],
    ]),
  ).toBe(7);
});
