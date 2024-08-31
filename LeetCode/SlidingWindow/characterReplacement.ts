/**
424. Longest Repeating Character Replacement
https://leetcode.com/problems/longest-repeating-character-replacement/description/
 */

function characterReplacement(s: string, k: number): number {
  let longCharReplacement = 0;
  const count = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let length = right - left + 1;
    count.set(s[right], 1 + (count.get(s[right]) || 0));

    if (length - Math.max(...count.values()) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }

    length = right - left + 1;
    longCharReplacement = Math.max(longCharReplacement, length);
  }

  return longCharReplacement;
}

console.log("Chararcter Replacement runnning.");
console.log(characterReplacement("AAABABB", 1));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2));

/**
function characterReplacement(s: string, k: number): number {
    let idx0 = 'A'.charCodeAt(0);
    let map = Array(26).fill(0);
    let l = 0;
    let maxFreq= 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        let idx = s.charCodeAt(r) - idx0
        map[idx] += 1;
        maxFreq = Math.max(maxFreq,map[idx]);
        while (r > l && r - l + 1 > maxFreq + k) {
            let leftIdx = s.charCodeAt(l) - idx0
            map[leftIdx] -= 1;
            if (maxFreq[0] === s[l]) maxFreq[1] -= 1;
            l++
        }

        res = Math.max(res, r + 1 - l)
    }

    return res
};
 */
