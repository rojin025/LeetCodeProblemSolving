/**
url
    https://leetcode.com/problems/clone-graph/
    https://neetcode.io/problems/clone-graph

 * @param node 
 */

import { _Node } from "./_node";

function cloneGraph(node: _Node | null): _Node | null {
  const visited = new Map<_Node, _Node>();

  function clone(node: _Node | null): _Node | null {
    if (node === null) return node;

    if (visited.has(node)) return visited.get(node)!;

    let copy = new _Node(node.val, []);
    visited.set(node, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor)!);
    }

    return copy;
  }

  return clone(node);
}

/**


function cloneGraph(node: _Node | null): _Node | null {
    const visited = new Map()
    return cloneDfs(node, visited)
};

function cloneDfs(node, visited) {
    if (node == null) return null
    const clone = new _Node(node.val, [])
    visited.set(node.val, clone)
    for (const neigh of node.neighbors) {
        if (visited.get(neigh.val)) {
            clone.neighbors.push(visited.get(neigh.val))
        } else {
            clone.neighbors.push(cloneDfs(neigh, visited))
        }
    }
    return clone
}

 */
