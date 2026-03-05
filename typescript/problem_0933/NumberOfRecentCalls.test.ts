import { expect, test } from 'vitest';
import { RecentCounter } from './NumberOfRecentCalls.ts';

test('numberOfRecentCalls', () => {
  const numberOfRecentCalls = new RecentCounter();

  expect(numberOfRecentCalls.ping(1)).toBe(1);
  expect(numberOfRecentCalls.ping(100)).toBe(2);
  expect(numberOfRecentCalls.ping(3001)).toBe(3);
  expect(numberOfRecentCalls.ping(3002)).toBe(3);
});
