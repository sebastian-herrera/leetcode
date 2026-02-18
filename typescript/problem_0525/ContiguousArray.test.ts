import { expect, test } from 'vitest';
import { findMaxLength } from './ContiguousArray.ts';

test('findMaxLength', () => {
  expect(findMaxLength([0, 1])).toBe(2);
  expect(findMaxLength([0, 1, 0])).toBe(2);
  expect(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0])).toBe(6);
});
