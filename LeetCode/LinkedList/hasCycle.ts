// https://leetcode.com/problems/linked-list-cycle/

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

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }
}

// Floyd's Tortoise  and hare
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return true;
  }

  return false;
}

/**

function hasCycle(head: ListNode | null): boolean {
    const s = new Set<ListNode>();

    while (true) {
        if (head === null || head.next === null) {
            return false;
        }
        if (s.has(head.next)) {
            return true;
        }
        s.add(head.next);
        head = head.next;
    }
};

 */
