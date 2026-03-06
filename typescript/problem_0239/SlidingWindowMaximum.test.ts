import { expect, test } from 'vitest';
import { maxSlidingWindow } from './SlidingWindowMaximum.ts';

test('maxSlidingWindow', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([3, 3, 5, 5, 6, 7]);
  expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
  expect(maxSlidingWindow([1, 1, 1, 1, 1, 4, 5], 6)).toStrictEqual([4, 5]);
  expect(maxSlidingWindow([8, 7, 6, 9], 2)).toStrictEqual([8, 7, 9]);
});
