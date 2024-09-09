/**
 
https://leetcode.com/problems/find-the-duplicate-number/

287. Find the Duplicate Number
 */

function findDuplicate(nums: number[]): number {
  let slow = nums[0],
    fast = nums[slow];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

findDuplicate([1, 3, 4, 2, 2]);
