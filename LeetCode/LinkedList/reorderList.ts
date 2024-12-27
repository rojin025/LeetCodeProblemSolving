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

/**
 Do not return anything, modify head in-place instead.
 */

type ListNode = {
  value: number;
  next: ListNode | null;
};

function reorderList(head: ListNode | null): void {
  if (!head) return;

  let middle = findMiddleNode(head);
  let fastHead = reverse(middle!.next!);
  middle!.next = null;

  merge(head, fastHead);
}

function findMiddleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast?.next?.next;
  }

  return slow;
}

function reverse(head: ListNode): ListNode | null {
  let previous: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

function merge(slowHead: ListNode | null, fastHead: ListNode | null) {
  while (fastHead) {
    let next: ListNode | null = slowHead!.next;
    slowHead!.next = fastHead;
    slowHead = fastHead;
    fastHead = next;
  }
}

/*
type ListNode = {
    val: number;
    next: ListNode | null;
  }; 
  */

/**
   Time complexity: O(n)
   Space complexity: O(n)
   */
