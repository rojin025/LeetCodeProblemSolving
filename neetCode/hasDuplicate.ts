function hasDuplicate(nums: number[]): boolean {
  let setNums = new Set(nums);
  return nums.length > setNums.size;
}

console.log("Hello Word.");

console.log(hasDuplicate([1, 2, 3]));
console.log(hasDuplicate([1, 2, 1, 3]));
