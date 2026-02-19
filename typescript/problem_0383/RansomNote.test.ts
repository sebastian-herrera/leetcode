import { expect, test } from 'vitest';
import { canConstruct } from './RansomNote.ts';

test('canConstruct', () => {
  expect(canConstruct('a', 'b')).toBe(false);
  expect(canConstruct('aa', 'ab')).toBe(false);
  expect(canConstruct('aa', 'aab')).toBe(true);
});
