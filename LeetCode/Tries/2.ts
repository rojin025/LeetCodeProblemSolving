type TrieNode2 = {
  [key: string]: TrieNode2 | boolean;
  isEnd: boolean;
};

class WordDictionary2 {
  root: TrieNode2;

  constructor() {
    this.root = {
      isEnd: false,
    };
  }

  addWord(word: string): void {
    let node: TrieNode2 = this.root;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {} as TrieNode2;
      }
      // Need to cast since node[char] could be boolean | TrieNode2
      node = node[char] as TrieNode2;
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    const traverse = (node: TrieNode2, i: number): boolean => {
      const char = word[i];

      if (i === word.length) return node.isEnd || false;

      if (char === ".") {
        for (const key in node) {
          if (key !== "isEnd" && traverse(node[key] as TrieNode2, i + 1)) {
            return true;
          }
        }
      } else if (node[char]) {
        return traverse(node[char] as TrieNode2, i + 1);
      }

      return false;
    };

    return traverse(this.root, 0);
  }
}
