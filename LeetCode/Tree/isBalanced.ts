function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  function dfs(node: TreeNode | null): [boolean, number] {
    if (!node) return [true, 0]; // [ tacking isBalanceTree , Height]

    const left = dfs(node.left);
    const right = dfs(node.right);
    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];
}
