import { expect, test } from 'vitest';
import { dailyTemperatures } from './DailyTemperatures.ts';

test('dailyTemperatures', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
    1, 1, 4, 2, 1, 1, 0, 0,
  ]);
  expect(dailyTemperatures([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0]);
  expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0]);
});
