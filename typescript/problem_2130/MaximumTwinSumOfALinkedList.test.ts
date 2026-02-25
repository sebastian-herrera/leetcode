import { expect, test } from 'vitest';
import { arrayToList, pairSum } from './MaximumTwinSumOfALinkedList.ts';

test('pairSum', () => {
  const testCases = [
    { input: [5, 4, 2, 1], expected: 6 },
    { input: [4, 2, 2, 3], expected: 7 },
    { input: [1, 100000], expected: 100001 },
  ];

  for (const { input, expected } of testCases) {
    const head = arrayToList(input);
    const resultNode = pairSum(head);
    const resultArray = resultNode;

    expect(resultArray).toEqual(expected);
  }
});
