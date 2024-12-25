/**
 Using Hash Map
 time complexity: O(n)
 space complexity: O(t) t = total TrieNode
 */

class Trie {
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

    cur.endOfWord = true;
  }

  /** Check if there is word in trie. */
  search(word: string): boolean {
    let cur: TrieNode = this.root;

    for (const c of word) {
      if (!cur.children.has(c)) return false;

      cur = cur.children.get(c)!;
    }

    return cur.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let cur: TrieNode = this.root;

    for (const c of prefix) {
      if (!cur.children.has(c)) return false;

      cur = cur.children.get(c)!;
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
