function isBalanced(root: TreeNode | null): boolean {
  let isBalancedSubTree = false;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    if (!isBalancedSubTree) {
      let leftDepth = dfs(node.left);
      let rightDepth = dfs(node.right);

      if (Math.abs(leftDepth - rightDepth) > 1) isBalancedSubTree = true;

      return 1 + Math.max(leftDepth, rightDepth);
    } else {
      return 0;
    }
  }

  dfs(root);

  return !isBalancedSubTree;
}
