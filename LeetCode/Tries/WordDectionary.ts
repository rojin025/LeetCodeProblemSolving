class WordDictionary {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur = this.root;

    for (const c of word) {
      if (!cur.children.has(c)) cur.children.set(c, new TrieNode());

      cur = cur.children.get(c)!;
    }

    cur.endOfword = true;
  }

  serach(word: string): boolean {
    return false;
  }

  private dfs(word: string, curIndex: number, root: TrieNode): boolean {
    let curNode = root;

    for (let i = curIndex; i < word.length; i++) {
      const char = word[i];

      if (char === ".") {
        // Handle all child nodes
        for (const children of curNode.children.values()) {
          if (this.dfs(word, i + 1, children)) return true;
        }
        return false;
      } else {
        if (!curNode.children.has(char)) return false;

        curNode = curNode.children.get(char)!;
      }
    }

    return curNode.endOfword;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
