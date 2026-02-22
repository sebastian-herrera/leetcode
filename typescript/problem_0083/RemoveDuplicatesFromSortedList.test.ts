import { expect, test } from 'vitest';
import { arrayToList, deleteDuplicates, listToArray } from './RemoveDuplicatesFromSortedList.ts';

test('deleteDuplicates', () => {
  const testCases = [
    { input: [1, 1, 2], expected: [1, 2] },
    { input: [1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3], expected: [1, 2, 3] },
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 1, 1], expected: [1] },
  ];

  for (const { input, expected } of testCases) {
    const head = arrayToList(input);
    const resultNode = deleteDuplicates(head);
    const resultArray = listToArray(resultNode);

    expect(resultArray).toEqual(expected);
  }
});
