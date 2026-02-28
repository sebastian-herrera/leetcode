import { expect, test } from 'vitest';
import { removeDuplicates } from './RemoveAllAdjacentDuplicatesInString.ts';

test('removeDuplicates', () => {
  expect(removeDuplicates('abbaca')).toBe('ca');
  expect(removeDuplicates('azxxzy')).toBe('ay');
});
