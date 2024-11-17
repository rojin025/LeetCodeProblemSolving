/**
https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/1380410222/
 */

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

class ListNodeClass {
  val: number;
  next: ListNodeClass | null;

  constructor(val: number, next: ListNodeClass | null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(
  head: ListNodeClass | null,
  n: number
): ListNodeClass | null {
  const dummy = new ListNodeClass(0, head);

  //   const dummy: ListNodeClass | null = {
  //     value: 0,
  //     next: head,
  //   };

  let left: ListNodeClass | null = dummy;
  let right: ListNodeClass | null = head;

  // point right at desired pointer
  while (n > 0) {
    right = right?.next;
    n--;
  }

  // Solved by assigning left pointer at dummy
  while (right !== null) {
    right = right?.next;
    left = left?.next;
  }

  // deleting node
  left.next = left?.next?.next;
  return dummy.next;
}
