/**
 https://leetcode.com/problems/reverse-linked-list/

 */

class MyListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type ListNode = {
  val: number;
  next: ListNode | null;
};

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let prev: ListNode | null = null;
  let tempNext: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    tempNext = curr.next;
    curr.next = prev;

    prev = curr;
    curr = tempNext;
  }

  return prev;
}

console.log("206. ReverseList running.");
// console.log(reverseList([1, 2, 3, 4, 5]));
