function search(nums: number[], target: number): number {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const m = Math.floor((r + l) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}

console.log("Running BS.");
console.log(search([1, 2, 3, 4, 5, 6], 1));
console.log(search([1, 2, 3, 4, 5, 6], 3));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 10));
