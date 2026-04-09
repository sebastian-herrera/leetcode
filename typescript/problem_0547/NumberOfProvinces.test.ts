import { expect, test } from 'vitest';
import { findCircleNum } from './NumberOfProvinces.ts';

test('findCircleNum', () => {
  expect(
    findCircleNum([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ]),
  ).toBe(2);
  expect(
    findCircleNum([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]),
  ).toBe(3);
  expect(
    findCircleNum([
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ]),
  ).toBe(1);
});
