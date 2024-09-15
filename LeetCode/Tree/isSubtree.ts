function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;

  if (!root) return false;

  if (isSametree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSametree(node: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!node && !subRoot) return true;

  if (node && subRoot && node.val === subRoot.val)
    return (
      isSametree(node.left, subRoot.left) &&
      isSametree(node.right, subRoot.right)
    );

  return false;
}
