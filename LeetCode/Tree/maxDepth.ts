// class _TreeNode {
//   val: number;
//   left: _TreeNode | null = null;
//   right: _TreeNode | null = null;

//   constructor(val = 0, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

function maxDepth(root: _TreeNode | null): number {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
