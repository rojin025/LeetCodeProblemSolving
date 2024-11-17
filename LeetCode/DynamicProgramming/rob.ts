function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let tempRob = 0;
  let maxRob = 0;

  for (const num of nums) {
    const maxAmt = Math.max(num + tempRob, maxRob);
    tempRob = maxRob;
    maxRob = maxAmt;
  }

  return maxRob;
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
