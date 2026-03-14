import type { ListNode } from '../common';

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
export function pairSum(head: ListNode | null): number {
  let slow = head,
    fast = head;

  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev = null,
    cur = slow;

  while (cur) {
    let nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }

  let ans = 0;

  while (head && prev) {
    let sum = head.val + prev.val;
    if (sum > ans) ans = sum;

    head = head?.next;
    prev = prev.next;
  }

  return ans;
}
