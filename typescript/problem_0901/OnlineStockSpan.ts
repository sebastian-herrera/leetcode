export class StockSpanner {
  private stack: number[];
  private lookup: Map<number, number>;
  private day: number;

  constructor() {
    this.stack = [];
    this.lookup = new Map();
    this.day = 1;
  }

  next(price: number): number {
    while (this.stack.length && price >= this.stack[this.stack.length - 1]) {
      this.lookup.delete(this.stack[this.stack.length - 1]);
      this.stack.pop();
    }

    this.stack.push(price);
    this.lookup.set(price, this.day);

    const r = this.lookup.get(this.stack[this.stack.length - 1]) ?? 0;
    const l = this.lookup.get(this.stack[this.stack.length - 2]) ?? 0;

    this.day++;
    return r - l;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// notes:

//  0     1    2    3    4    5    6
// [100],[80],[60],[70],[60],[75],[85]
// 100          =1
// 100,80       =1
// 100,80,60    =1
// 100,80,70    =2
// 100,80,70,60 =1
// 100,80,75    =4
// 100,85       =6
//
// es un monotonic stack decreasing
// se deben guardar los indices y luego restarlos hasta que encuentre un numero mayor r-l
//
//
// otro test:
// 0     1    2    3    4
// [31],[41],[48],[59],[79]
// 31 =1
// 41 =2
// 48 =3
// 59 =4
// 79 =5
//
//
// otro: [28],[14],[28],[35],[46],[53],[66],[80],[87],[88]
// 28     =1
// 28,14  =1
// 28     =3
// 35     =4
// 46     =5
// 53     =6
// 66     =7
// 80     =8
// 87     =9
// 88     =10
