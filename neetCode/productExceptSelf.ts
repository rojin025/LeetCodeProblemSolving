function productExceptSelf(nums: number[]) {
  let n = nums.length;
  let results: number[] = [];
  let mulLeft: number[] = [];
  let mulRight: number[] = [];

  // left multiplication
  let leftMul = 1;
  mulLeft[0] = leftMul;
  for (let i = 1; i < n; i++) {
    leftMul *= nums[i];
    mulLeft[i] = leftMul;
  }
  console.log(mulLeft);

  let rightMul = 1;
  mulRight[n - 1] = rightMul;
  for (let i = n - 2; i >= 0; i--) {
    rightMul *= nums[i];
    mulRight[i] = rightMul;
  }
  console.log(mulRight);

  for (let i = 0; i < n; i++) {
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
