/**
 https://leetcode.com/problems/min-stack/

 */
interface MinStack {
  stack: number[];
  minNumber: number[];
}

class MinStack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(val: number): void {
    this.stack.push(val);
    if (val <= this.minStack[this.minStack.length - 1]) this.minStack.push(val);
  }

  pop(): void {
    const poppedVal = this.stack.pop();
    if (poppedVal === this.minStack[this.minStack.length - 1])
      this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

console.log("Running MinStack.");

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack);

console.log(minStack.getMin()); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
console.log(minStack);
