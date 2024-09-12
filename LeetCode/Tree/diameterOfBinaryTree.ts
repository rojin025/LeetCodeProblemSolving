//https://leetcode.com/problems/diameter-of-binary-tree/

function diameterOfBinaryTree(root: _TreeNode | null): number {
  if (!root) return 0;

  let diameter = 0;

  function dfs(root: _TreeNode | null): number {
    if (!root) return 0;

    const leftDepth = dfs(root.left);
    const rightDepth = dfs(root.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  dfs(root);

  return diameter;
}
