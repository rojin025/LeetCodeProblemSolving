function groupAnagram(words: string[]): string[][] {
  const ans: { [key: string]: string[] } = {};

  for (const word of words) {
    const count: number[] = Array(26).fill(0);

    for (const char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join("");

    if (!ans[key]) {
      ans[key] = [];
    }

    ans[key].push(word);
  }

  return Object.values(ans);
}

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
console.log(groupAnagram(["act"]));
console.log(groupAnagram([""]));
