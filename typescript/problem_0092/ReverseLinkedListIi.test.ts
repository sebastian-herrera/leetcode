import { expect, test } from 'vitest';
import { arrayToList, listToArray, reverseBetween } from './ReverseLinkedListIi.ts';

test('reverseBetween', () => {
  const testCases = [
    {
      input: { head: [1, 2, 3, 4, 5, 6, 7, 8, 9], left: 4, right: 6 },
      expected: [1, 2, 3, 6, 5, 4, 7, 8, 9],
    },
    { input: { head: [1, 2, 3, 4, 5], left: 2, right: 4 }, expected: [1, 4, 3, 2, 5] },
    { input: { head: [5], left: 1, right: 1 }, expected: [5] },
    { input: { head: [1, 2, 3], left: 1, right: 2 }, expected: [2, 1, 3] },
  ];

  for (const { input, expected } of testCases) {
    const head = arrayToList(input.head);
    const resultNode = reverseBetween(head, input.left, input.right);
    const resultArray = listToArray(resultNode);

    expect(resultArray).toEqual(expected);
  }
});
