import { expect, test } from 'vitest';
import { minMutation } from './MinimumGeneticMutation.ts';

test('minMutation', () => {
  expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])).toBe(1);
  expect(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])).toBe(2);
  expect(
    minMutation('AAAACCCC', 'CCCCCCCC', [
      'AAAACCCA',
      'AAACCCCA',
      'AACCCCCA',
      'AACCCCCC',
      'ACCCCCCC',
      'CCCCCCCC',
      'AAACCCCC',
      'AACCCCCC',
    ]),
  ).toBe(4);
});
