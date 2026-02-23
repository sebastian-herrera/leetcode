import { expect, test } from 'vitest';
import { arrayToList, listToArray, reverseList } from './ReverseLinkedList.ts';

test('reverseList', () => {
  const testCases = [
    { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
    { input: [1, 2], expected: [2, 1] },
    { input: [], expected: [] },
  ];

  for (const { input, expected } of testCases) {
    const head = arrayToList(input);
    const resultNode = reverseList(head);
    const resultArray = listToArray(resultNode);

    expect(resultArray).toEqual(expected);
  }
});
