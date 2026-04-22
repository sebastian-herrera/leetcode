import { expect, test } from 'vitest';
import { arrayToTree, findNode } from '../common/tree.ts';
import { distanceK } from './AllNodesDistanceKInBinaryTree.ts';

const cases: {
  data: (number | null)[];
  target: number;
  k: number;
  expected: number[];
}[] = [
  {
    data: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
    target: 5,
    k: 2,
    expected: [7, 4, 1],
  },
  {
    data: [1],
    target: 1,
    k: 3,
    expected: [],
  },
];

test.each(cases)('distanceK $data, target=$target, k=$k', ({ data, target: t, k, expected }) => {
  const root = arrayToTree(data);
  const target = findNode(root, t);

  expect(distanceK(root, target, k)).toEqual(expected);
});
