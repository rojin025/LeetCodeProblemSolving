/**
 https://leetcode.com/problems/add-two-numbers/
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

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const resNode: ListNode | null = new ListNode();
  let currrentNode: ListNode | null = resNode;

  let carry = 0;
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    let addedVal = v1 + v2 + carry;
    carry = Math.floor(addedVal / 10); // 12 = 1.2 = 1
    addedVal = addedVal % 10; // 12 = 2
    currrentNode.next = new ListNode(addedVal);

    currrentNode = currrentNode.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return resNode.next;
}

/**
 Intresting code seen
  const sum = (current1?.val ?? 0)+(current2?.val ?? 0) + (carry ?? 0)
 */
