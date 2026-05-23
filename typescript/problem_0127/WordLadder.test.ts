import { expect, test } from 'vitest';
import { ladderLength } from './WordLadder.ts';

test('ladderLength', () => {
  expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(5);
  expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])).toBe(0);
});
