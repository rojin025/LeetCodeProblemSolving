class _TreeNode {
  val: number;
  left: _TreeNode | null = null;
  right: _TreeNode | null = null;

  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  invertTree(root: _TreeNode | null): _TreeNode | null {
    if (!root) return null;

    const node = new _TreeNode(root.val);

    node.right = this.invertTree(root.left);
    node.left = this.invertTree(root.right);

    return node;
  }
}
