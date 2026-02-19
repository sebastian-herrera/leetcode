import { expect, test } from 'vitest';
import { numJewelsInStones } from './JewelsAndStones.ts';

test('numJewelsInStones', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  expect(numJewelsInStones('z', 'ZZ')).toBe(0);
});
