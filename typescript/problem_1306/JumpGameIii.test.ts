import { expect, test } from 'vitest';
import { canReach } from './JumpGameIii.ts';

test('canReach', () => {
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBe(true);
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toBe(true);
  expect(canReach([3, 0, 2, 1, 2], 2)).toBe(false);
  expect(canReach([4, 2, 3, 1, 3, 1, 2], 0)).toBe(false);
});
