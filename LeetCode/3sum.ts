/**
  https://leetcode.com/problems/3sum/
  
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return result;
}
