import { ListNode } from "./listNode";

export class MaxPriorityQueue {
  private head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // Enqueue: Insert element in descending order
  enqueue(val: number): void {
    const newNode = new ListNode(val);

    // If the list is empty or the new value is larger than the head, insert at the head
    if (!this.head || val > this.head.val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse the list to find the correct position for the new value
    let current = this.head;
    while (current.next && current.next.val > val) {
      current = current.next;
    }

    // Insert the new node at the found position
    newNode.next = current.next;
    current.next = newNode;
  }

  // Dequeue: Remove and return the element at the front (largest element)
  dequeue(): ListNode | null {
    if (!this.head) {
      throw new Error("Queue is empty");
    }

    const maxNode = this.head; // Store the node itself
    this.head = this.head.next; // Move to the next node

    return maxNode; // Return the node instead of just the value
  }

  // Return the largest element (element at the front)
  front(): { element: number } {
    if (!this.head) {
      throw new Error("Queue is empty");
    }

    return { element: this.head.val };
  }

  // Return all elements without modifying the queue
  getAllElements(): number[] {
    const elements: number[] = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.val); // Collect each element's value
      current = current.next; // Move to the next node
    }

    return elements;
  }

  // Return the size of the queue
  size(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

/** Example usage:
 * const maxQueue = new MaxPriorityQueue();
 * maxQueue.enqueue(5);
 * maxQueue.enqueue(10);
 * console.log(maxQueue.dequeue()); // Outputs: 10 (dequeues and returns the largest element)
 * console.log(maxQueue.front().element); // Outputs: 5
 */
