/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minPriQueue = new MinPriorityQueue();
  this.k = k;
  for (let num of nums) {
    this.add(num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minPriQueue.size() < this.k) {
    this.minPriQueue.enqueue(val);
  } else if (val > this.minPriQueue.front().element) {
    this.minPriQueue.dequeue();
    this.minPriQueue.enqueue(val);
  }

  return this.minPriQueue.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
