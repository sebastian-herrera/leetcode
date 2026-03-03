import { expect, test } from 'vitest';
import { makeGood } from './MakeTheStringGreat.ts';

test('makeGood', () => {
  expect(makeGood('leEeetcode')).toBe('leetcode');
  expect(makeGood('abBAcC')).toBe('');
  expect(makeGood('s')).toBe('s');
  expect(makeGood('heeErrera')).toBe('herrera');
});
