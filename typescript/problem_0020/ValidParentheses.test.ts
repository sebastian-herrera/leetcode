import { expect, test } from 'vitest';
import { isValid } from './ValidParentheses.ts';

test('isValid', () => {
  expect(isValid('()))())()')).toBe(false);
  expect(isValid('()')).toBe(true);
  expect(isValid('((')).toBe(false);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([])')).toBe(true);
  expect(isValid('([)]')).toBe(false);
});
