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
  insert(word: string): void {
    let cur: TrieNode = this.root;

    for (const c of word) {
      if (!cur.children.has(c)) {
        cur.children.set(c, new TrieNode());
      }
      cur = cur.children.get(c)!;
    }

    cur.endOfword = true;
  }

  /** Check if there is word in trie. */
  search(word: string): boolean {
    let cur: TrieNode = this.root;

    for (const c of word) {
      if (!cur.children.has(c)) return false;

      cur = cur.children.get(c)!;
    }

    return cur.endOfword;
  }

  startsWith(prefix: string): boolean {
    return false;
  }
}

// app
