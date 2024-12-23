import React from "react";

// TrieNode and PrefixTree implementations
class TrieNode {
  children: Map<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class PrefixTree {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  getRoot(): TrieNode {
    return this.root;
  }

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
}

// Visualization Component
const TrieVisualization = () => {
  const [trie] = React.useState(() => {
    const t = new PrefixTree();
    // Example words
    ["cat", "cats", "catch", "dog", "dogs"].forEach((word) => t.insert(word));
    return t;
  });

  const renderNode = (
    node: TrieNode,
    char: string = "",
    level: number = 0,
    pos: number = 0
  ) => {
    const children = Array.from(node.children.entries());
    const nodeWidth = 40;
    const horizontalSpacing = 60;
    const verticalSpacing = 80;

    return (
      <g key={`${level}-${pos}-${char}`}>
        {/* Node circle */}
        <circle
          cx={pos * horizontalSpacing}
          cy={level * verticalSpacing}
          r={nodeWidth / 2}
          fill={node.endOfWord ? "#4ade80" : "#93c5fd"}
          stroke="#1e40af"
          strokeWidth="2"
        />

        {/* Character text */}
        <text
          x={pos * horizontalSpacing}
          y={level * verticalSpacing}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1e3a8a"
          fontSize="16"
          fontWeight="bold"
        >
          {char}
        </text>

        {/* Lines to children */}
        {children.map(([childChar, childNode], index) => {
          const childPos = pos - (children.length - 1) / 2 + index;
          return (
            <g key={`line-${level}-${pos}-${index}`}>
              <line
                x1={pos * horizontalSpacing}
                y1={level * verticalSpacing + nodeWidth / 2}
                x2={childPos * horizontalSpacing}
                y2={(level + 1) * verticalSpacing - nodeWidth / 2}
                stroke="#1e40af"
                strokeWidth="2"
              />
              {renderNode(childNode, childChar, level + 1, childPos)}
            </g>
          );
        })}
      </g>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Trie Visualization</h2>
      <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg overflow-auto">
        <svg
          width="800"
          height="400"
          viewBox="-400 -20 800 400"
          className="mx-auto"
        >
          {renderNode(trie.getRoot(), "", 0, 0)}
        </svg>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>• Green nodes indicate end of words</p>
        <p>• Blue nodes are intermediate characters</p>
      </div>
    </div>
  );
};

export default TrieVisualization;
