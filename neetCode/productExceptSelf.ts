function productExceptSelf(nums: number[]) {
  let results: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        sum *= nums[j];
      }
    }
    results.push(sum);
  }

  return results;
}

console.log("---->", productExceptSelf([1, 2, 3, 4]));
