/**
 https://leetcode.com/problems/copy-list-with-random-pointer/ 
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
    this.random = random ? random : null;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  const hashMap = new Map();
  hashMap.set(null, null);

  let currentNode = head;
  while (currentNode) {
    const copyVal = new _Node(currentNode.val);
    hashMap.set(currentNode, currentNode.val);

    currentNode = currentNode.next;
  }

  currentNode = head;
  while (currentNode) {
    const cloneNode = hashMap.get(currentNode);
    cloneNode.next = hashMap.get(currentNode.next);
    cloneNode.random = hashMap.get(currentNode.random);

    currentNode = currentNode.next;
  }

  return hashMap.get(head);
}
