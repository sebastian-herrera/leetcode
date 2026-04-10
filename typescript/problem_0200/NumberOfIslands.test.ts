import { expect, test } from 'vitest';
import { numIslands } from './NumberOfIslands.ts';

test('numIslands', () => {
  expect(
    numIslands([
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ]),
  ).toBe(1);
  expect(
    numIslands([
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]),
  ).toBe(3);
});
