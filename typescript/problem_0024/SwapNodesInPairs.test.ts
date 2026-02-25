import { expect, test } from 'vitest';
import { arrayToList, listToArray, swapPairs } from './SwapNodesInPairs.ts';

test('swapPairs', () => {
  const testCases = [
    { input: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 2, 3], expected: [2, 1, 3] },
  ];

  for (const { input, expected } of testCases) {
    const head = arrayToList(input);
    const resultNode = swapPairs(head);
    const resultArray = listToArray(resultNode);

    expect(resultArray).toEqual(expected);
  }
});
