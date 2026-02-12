import { expect, test } from 'vitest';
import { maxNumberOfBalloons } from './MaximumNumberOfBalloons.ts';

test('maxNumberOfBalloons', () => {
  expect(maxNumberOfBalloons('nlaebolko')).toBe(1);
  expect(maxNumberOfBalloons('loonbalxballpoon')).toBe(2);
  expect(maxNumberOfBalloons('leetcode')).toBe(0);
  expect(maxNumberOfBalloons('nllbblooon')).toBe(0);
});
