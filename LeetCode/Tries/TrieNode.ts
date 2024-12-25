class TrieNode {
  children: Map<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}
