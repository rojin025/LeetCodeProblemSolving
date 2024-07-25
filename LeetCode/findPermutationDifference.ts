/**
 * https://leetcode.com/problems/permutation-difference-between-two-strings/description/
 * @param s
 * @param t
 */

function findPermutationDifference(s: string, t: string): number {
  let ans = 0;
  let absValue = 0;

  if (s.length !== t.length) return 0;

  for (let i = 0; i < s.length; i++) {
    absValue = Math.abs(i - t.indexOf(s.charAt(i)));
    console.log(absValue);
    ans += absValue;
  }

  return ans;
}

console.log(
  "findPermutationDifference running.",
  findPermutationDifference("abcde", "edbac")
);
/**
 * Input: s = "abcde", t = "edbac"

Output: 12

Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.
 */
