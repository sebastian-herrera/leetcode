import { ListNode } from '../common';

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  let dummy = new ListNode(0, head),
    leftPrev = dummy;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = leftPrev.next!;
  }

  let cur = leftPrev.next,
    prev = null;

  for (let i = right - left + 1; i > 0; i--) {
    let nxt = cur?.next;

    cur!.next = prev;
    prev = cur;
    cur = nxt!;
  }

  leftPrev.next!.next = cur;
  leftPrev.next = prev;

  return dummy.next;
}
