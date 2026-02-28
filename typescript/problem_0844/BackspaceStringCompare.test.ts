import { expect, test } from 'vitest';
import { backspaceCompare } from './BackspaceStringCompare.ts';

test('backspaceCompare', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  expect(backspaceCompare('ab##', 'c#d#')).toBe(true);
  expect(backspaceCompare('a#c', 'b')).toBe(false);
  expect(backspaceCompare('#ab#c#####', 'ad#c')).toBe(false);
});
