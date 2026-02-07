import { expect, test } from 'vitest';
import { checkIfPangram } from './CheckIfTheSentenceIsPangram.ts';

test('checkIfPangram', () => {
  expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
  expect(checkIfPangram('leetcode')).toBe(false);
});
