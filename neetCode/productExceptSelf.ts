function productExceptSelf(nums: number[]) {
  let size = nums.length;
  let results: number[] = Array(size).fill(1);
  let mulLeft: number[] = Array(size).fill(1);
  let mulRight: number[] = Array(size).fill(1);

  // left multiplication
  for (let i = 1; i < size; i++) {
    mulLeft[i] = mulLeft[i - 1] * nums[i - 1];
  }
  console.log(mulLeft);

  // Right MUl
  for (let i = size - 2; i >= 0; i--) {
    mulRight[i] = mulRight[i + 1] * nums[i + 1];
  }
  console.log(mulRight);

  for (let i = 0; i < size; i++) {
    results[i] = mulLeft[i] * mulRight[i];
  }

  /*
  O(n2)
   */
  // for (let i = 0; i < nums.length; i++) {
  //   let sum = 1;

  //   for (let j = 0; j < nums.length; j++) {
  //     if (i !== j) {
  //       sum *= nums[j];
  //     }
  //   }
  //   results.push(sum);
  // }

  /** O(n) */

  return results;
}

console.log("---->", productExceptSelf([1, 2, 3, 4]));
