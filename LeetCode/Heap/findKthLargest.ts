function findKthLargest(nums: number[], k: number): number {
  console.log(nums.sort((a, b) => b - a));
  return nums.sort((a, b) => b - a)[k - 1];
}

console.log("Kth largeest runnung.");

console.log(findKthLargest([2, 3, 1, 5, 4], 2));
