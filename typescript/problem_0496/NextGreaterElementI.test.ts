import { expect, test } from 'vitest';
import { nextGreaterElement } from './NextGreaterElementI.ts';

test('nextGreaterElement', () => {
  expect(nextGreaterElement([4, 2], [4, 1, 3, 2, 5])).toStrictEqual([5, 5]);
  expect(nextGreaterElement([1, 2], [1, 2, 3])).toStrictEqual([2, 3]);
  expect(nextGreaterElement([4], [4, 6, 8, 2])).toStrictEqual([6]);
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toStrictEqual([-1, 3, -1]);
  expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toStrictEqual([3, -1]);
});

// 4
// 4
// 4
// 4,2 2->5
// 4   4->5
//
