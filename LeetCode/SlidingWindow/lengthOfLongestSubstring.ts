/**
 https://leetcode.com/problems/longest-substring-without-repeating-characters/

 */
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let longestSubstringSet = new Set();
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (longestSubstringSet.has(s[right])) {
      longestSubstringSet.delete(s[left]);
      left++;
    }

    longestSubstringSet.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }
  //   console.log(longestSubstringSet);

  return longest;
}

console.log("3. Longest substring without repeating char.");
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
9;
