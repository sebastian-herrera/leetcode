import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { zigzagLevelOrder } from './BinaryTreeZigzagLevelOrderTraversal.ts';

test('zigzagLevelOrder', () => {
  expect(zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]))).toEqual([
    [3],
    [20, 9],
    [15, 7],
  ]);
  expect(zigzagLevelOrder(arrayToTree([1]))).toEqual([[1]]);
  expect(zigzagLevelOrder(arrayToTree([]))).toEqual([]);
  expect(zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7, 6, 5, 2, 1]))).toEqual([
    [3],
    [20, 9],
    [15, 7],
    [1, 2, 5, 6],
  ]);
  expect(
    zigzagLevelOrder(
      arrayToTree([
        3,
        9,
        20,
        null,
        null,
        15,
        7,
        6,
        5,
        2,
        12,
        23,
        4,
        34,
        64,
        56,
        67,
        78,
        67,
        89,
        78,
        6,
        7,
        9,
        7,
        8,
        78,
        9,
        90,
        82,
        89,
      ]),
    ),
  ).toEqual([
    [3],
    [20, 9],
    [15, 7],
    [12, 2, 5, 6],
    [23, 4, 34, 64, 56, 67, 78, 67],
    [89, 82, 90, 9, 78, 8, 7, 9, 7, 6, 78, 89],
  ]);
});
