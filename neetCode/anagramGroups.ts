function groupAnagrams(words: string[]): string[][] {
  const result: string[][] = [];
  const map: Map<string, string[]> = new Map();

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord)!.push(word);
  }

  for (const value of map.values()) {
    result.push(value);
  }

  return result;
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
console.log(groupAnagrams(["act"]));
console.log(groupAnagrams([""]));

/**
 * Best Solution
 
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    for(let i = 0; i < strs.length; i++) {
        const curr = strs[i]
        const hash = primeHash(curr)
        if (map.has(hash)) {
            map.get(hash).push(curr)
        } else {
            map.set(hash, [curr])
        }
    }

    return Array.from(map.values())
};

function primeHash(str: string): number {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    return Array.from(str).reduce((prev, curr) => prev * primes[curr.charCodeAt(0) - 97], 1)
}

 */
