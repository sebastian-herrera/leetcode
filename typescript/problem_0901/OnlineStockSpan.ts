export class StockSpanner {
  private stack: [number, number][]; // price, day
  private day: number;

  constructor() {
    this.stack = [];
    this.day = 1;
  }

  next(price: number): number {
    // monotonic decreasing
    while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
      this.stack.pop();
    }

    this.stack.push([price, this.day]);
    this.day++;

    const r = this.stack[this.stack.length - 1][1];
    const l = this.stack[this.stack.length - 2]?.[1];

    return r - (l ?? 0);
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
