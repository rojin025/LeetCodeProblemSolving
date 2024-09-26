export class ListNode {
  val: number;
  vals: number[];
  next: ListNode | null;

  constructor(val: number = -Infinity, vals: number[] = []) {
    this.val = val;
    this.next = null;
  }
}
