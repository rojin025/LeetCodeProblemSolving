class Solution {
  invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const node = new TreeNode(root.val);

    node.right = this.invertTree(root.left);
    node.left = this.invertTree(root.right);

    return node;
  }
}
