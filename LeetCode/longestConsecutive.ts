/**
https://leetcode.com/problems/longest-consecutive-sequence/

 * @param nums
 * @returns 
 */
function longestConsecutive(nums: number[]): number {
  let numSet: Set<number> = new Set(nums);
  let longestStreak: number = 0;

  for (const num of numSet) {
    // Check if left number exist's
    if (!numSet.has(num - 1)) {
      let length = 1;

      while (numSet.has(num + length)) {
        length++;
      }

      longestStreak = Math.max(length, longestStreak);
    }
  }

  return longestStreak;
}

console.log("Longest Consecutive Running");
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
