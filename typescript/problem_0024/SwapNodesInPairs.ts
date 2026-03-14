// %%

import { arrayToList, type ListNode } from '../common';

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let dummy = head.next,
    prev: ListNode | null = null;

  while (head?.next) {
    if (prev) prev.next = head.next;

    let nxt: ListNode | null = head.next.next;

    head.next.next = head;
    head.next = nxt;

    prev = head;
    head = nxt;
  }

  return dummy;
}

console.log(swapPairs(arrayToList([1, 2, 3, 4]))); // [2, 1, 4, 3]
