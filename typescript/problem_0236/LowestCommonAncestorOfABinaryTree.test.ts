import { expect, test } from 'vitest';
import { arrayToTree, findNode } from '../common';
import { lowestCommonAncestor } from './LowestCommonAncestorOfABinaryTree.ts';

const cases: {
  data: (number | null)[];
  p: number;
  q: number;
  expected: number;
}[] = [
  {
    data: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
    p: 5,
    q: 1,
    expected: 3,
  },
  {
    data: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
    p: 5,
    q: 4,
    expected: 5,
  },
  {
    data: [1, 2],
    p: 1,
    q: 2,
    expected: 1,
  },
  {
    data: [3, 5, 1, 6, 2, null, null, null, null, 7, 4],
    p: 6,
    q: 4,
    expected: 5,
  },
];

test.each(cases)('lowestCommonAncestor for tree $data with p=$p, q=$q', ({
  data,
  p: pVal,
  q: qVal,
  expected: expVal,
}) => {
  const root = arrayToTree(data);

  const p = findNode(root, pVal);
  const q = findNode(root, qVal);
  const expected = findNode(root, expVal);

  const result = lowestCommonAncestor(root, p, q);

  expect(result).toStrictEqual(expected);
});
