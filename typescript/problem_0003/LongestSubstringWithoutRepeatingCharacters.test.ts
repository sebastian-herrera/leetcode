import { expect, test } from 'vitest';
import { lengthOfLongestSubstring } from './LongestSubstringWithoutRepeatingCharacters.ts';

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('abba')).toBe(2);
  expect(lengthOfLongestSubstring('dvdf')).toBe(3);
});
