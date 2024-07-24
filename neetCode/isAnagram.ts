/**
 *  242. Valid Anagram
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const buildCharFrequency = (str: string): { [key: string]: number } => {
    const charFrequency: { [key: string]: number } = {};

    for (const char of str.toLowerCase()) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    return charFrequency;
  };

  const charFrequencyS = buildCharFrequency(s);
  const charFrequencyT = buildCharFrequency(t);

  console.log(charFrequencyS);
  console.log(charFrequencyT);

  for (const key in charFrequencyS) {
    if (charFrequencyS[key] !== charFrequencyT[key]) return false;
  }

  return true;
}

console.log("Running Anagram.");
console.log(isAnagram("rat", "cat"));
console.log(isAnagram("rat", "art"));

function isAnagram2(s: string, t: string) {
  //Using Array Methord
  const cleanAndSort = (str: string): string => {
    return str.toLowerCase().split("").sort().join("");
  };

  return cleanAndSort(s) === cleanAndSort(t);
}

console.log(isAnagram2("rati", "icat"));
console.log(isAnagram2("iiirat", "artiii"));
