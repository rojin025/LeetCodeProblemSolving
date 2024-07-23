/**
 *  242. Valid Anagram
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) return false;
  }

  return true;
}

console.log("Running Anagram.");
console.log(isAnagram("rat", "cat"));
console.log(isAnagram("rat", "art"));
