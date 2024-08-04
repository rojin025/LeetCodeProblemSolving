//Leetcode392: https://leetcode.com/problems/is-subsequence/description/

function isSubsequence(s: string, t: string): boolean {
  let targetCharPosition = 0;
  let targetLength = t.length;

  for (let i = 0; i <= s.length; i++) {
    if (s.charAt(i) === t.charAt(targetCharPosition)) {
      if (targetCharPosition >= targetLength) {
        return true;
      }
      targetCharPosition++;
    }
  }

  return false;
}

console.log("IsSubsequence");
console.log(isSubsequence("ahbgdc", "abc"));
console.log(isSubsequence("ahbgdc", "axc"));
