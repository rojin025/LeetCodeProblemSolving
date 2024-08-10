/**
https://leetcode.com/problems/longest-consecutive-sequence/

 * @param nums
 * @returns 
 */
function longestConsecutive(nums: number[]): number {
  let numsSet = new Set(nums);
  let longest = 0;

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      while (numsSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
}
