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

console.log("Longest Consecutive Running");
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
