import { expect, test } from 'vitest';
import { canVisitAllRooms } from './KeysAndRooms.ts';

test('canVisitAllRooms', () => {
  expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
  expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
});
