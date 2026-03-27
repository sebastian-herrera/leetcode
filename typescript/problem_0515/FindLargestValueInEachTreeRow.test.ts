import { expect, test } from 'vitest';
import { arrayToTree } from '../common';
import { largestValues } from './FindLargestValueInEachTreeRow.ts';

test('largestValues', () => {
  expect(largestValues(arrayToTree([1, 3, 2, 5, 3, null, 9]))).toEqual([1, 3, 9]);
  expect(largestValues(arrayToTree([1, 2, 3]))).toEqual([1, 3]);
  expect(largestValues(arrayToTree([]))).toEqual([]);
});
