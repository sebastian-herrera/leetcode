import { expect, test } from 'vitest';
import { arrayToList, listToArray, middleNode } from './MiddleOfTheLinkedList.ts';

test('middleNode', () => {
  const testCases = [
    { input: [1, 2, 3, 4, 5], expected: [3, 4, 5] },
    { input: [1, 2, 3, 4, 5, 6], expected: [4, 5, 6] },
  ];

  for (const { input, expected } of testCases) {
    const head = arrayToList(input);
    const resultNode = middleNode(head);
    const resultArray = listToArray(resultNode);

    expect(resultArray).toEqual(expected);
  }
});
