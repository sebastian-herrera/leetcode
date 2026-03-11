import { expect, test } from 'vitest';
import { StockSpanner } from './OnlineStockSpan.ts';

const scenarios: [number, number][][] = [
  [
    [100, 1],
    [80, 1],
    [60, 1],
    [70, 2],
    [60, 1],
    [75, 4],
    [85, 6],
  ],
  [
    [31, 1],
    [41, 2],
    [48, 3],
    [59, 4],
    [79, 5],
  ],
  [
    [28, 1],
    [14, 1],
    [28, 3],
    [35, 4],
    [46, 5],
    [53, 6],
    [66, 7],
    [80, 8],
    [87, 9],
    [88, 10],
  ],
];

test('onlineStockSpan', () => {
  scenarios.forEach(sequence => {
    const onlineStockSpan = new StockSpanner();

    sequence.forEach(([price, expected]) => {
      expect(onlineStockSpan.next(price)).toBe(expected);
    });
  });
});
