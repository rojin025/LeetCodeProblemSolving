class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val: number, next: _Node, random: _Node) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
    this.random = random ? random : null;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  return null;
}
