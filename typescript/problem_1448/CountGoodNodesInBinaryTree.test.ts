import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { goodNodes } from './CountGoodNodesInBinaryTree.ts';

test('goodNodes', () => {
  expect(goodNodes(arrayToTree([3, 1, 4, 3, null, 1, 5]))).toBe(4);
  expect(goodNodes(arrayToTree([3, 3, null, 4, 2]))).toBe(3);
  expect(goodNodes(arrayToTree([1]))).toBe(1);
  expect(goodNodes(arrayToTree([9, null, 3, 6]))).toBe(1);
  expect(
    goodNodes(
      arrayToTree([
        -1,
        5,
        -2,
        4,
        4,
        2,
        -2,
        null,
        null,
        -4,
        null,
        -2,
        3,
        null,
        -2,
        0,
        null,
        -1,
        null,
        -3,
        null,
        -4,
        -3,
        3,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        3,
        -3,
      ]),
    ),
  ).toBe(5);
});
