import { expect, test } from 'vitest';
import { calcEquation } from './EvaluateDivision.ts';

test('calcEquation', () => {
  expect(
    calcEquation(
      [
        ['a', 'b'],
        ['b', 'c'],
      ],
      [2.0, 3.0],
      [
        ['a', 'c'],
        ['b', 'a'],
        ['a', 'e'],
        ['a', 'a'],
        ['x', 'x'],
      ],
    ),
  ).toEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
  expect(
    calcEquation(
      [
        ['a', 'b'],
        ['b', 'c'],
        ['bc', 'cd'],
      ],
      [1.5, 2.5, 5.0],
      [
        ['a', 'c'],
        ['c', 'b'],
        ['bc', 'cd'],
        ['cd', 'bc'],
      ],
    ),
  ).toEqual([3.75, 0.4, 5.0, 0.2]);
  expect(
    calcEquation(
      [['a', 'b']],
      [0.5],
      [
        ['a', 'b'],
        ['b', 'a'],
        ['a', 'c'],
        ['x', 'y'],
      ],
    ),
  ).toEqual([0.5, 2.0, -1.0, -1.0]);
  expect(
    calcEquation(
      [['a', 'aa']],
      [9.0],
      [
        ['aa', 'a'],
        ['aa', 'aa'],
      ],
    ),
  ).toStrictEqual([0.1111111111111111, 1.0]);
});
