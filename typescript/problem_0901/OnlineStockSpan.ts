export class StockSpanner {
  private stack: [number, number][]; // price, day

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let span = 1;

    // monotonic decreasing
    while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
      const top = this.stack.pop();
      if (top) span += top[1];
    }

    this.stack.push([price, span]);
    return span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
