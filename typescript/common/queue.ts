// FIFO

class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

export class Queue<T> {
  private head: QueueNode<T> | null = null;
  private tail: QueueNode<T> | null = null;
  private length: number = 0;

  constructor(initialElements: T[] = []) {
    for (let i = 0; i < initialElements.length; i++) {
      this.push(initialElements[i]);
    }
  }

  /** enqueues element at the tail */
  push(val: T): void {
    const newNode = new QueueNode(val);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** dequeues and returns head element */
  pop(): T | undefined {
    if (this.head === null) return undefined;

    const val = this.head.val;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return val;
  }

  /** returns head element without removal */
  peek(): T | undefined {
    return this.head !== null ? this.head.val : undefined;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }
}
