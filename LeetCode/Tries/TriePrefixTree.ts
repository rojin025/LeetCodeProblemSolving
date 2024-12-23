class TrieNode {
  children: Map<string, TrieNode>;
  endOfword: boolean;

  constructor() {
    this.children = new Map();
    this.endOfword = false;
  }
}

class PrefixTree {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /** insert word into Trie */
  insert(word: string): void {}

  /** Check if there is word in trie. */
  search(): boolean {
    return false;
  }

  startsWith(prefix): boolean {
    return false;
  }
}
