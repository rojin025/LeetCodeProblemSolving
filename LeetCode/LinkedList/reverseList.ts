type ListNode = {
  val: number;
  next: ListNode | null;
};

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}
