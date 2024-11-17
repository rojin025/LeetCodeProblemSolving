//https://leetcode.com/problems/subsets/
//https://neetcode.io/problems/subsets

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];

  function dfs(nums: number[], i: number) {
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }

    // adding left node
    subset.push(nums[i]);
    dfs(nums, i + 1);

    // doing nothing to right node--> removing right node
    subset.pop();
    dfs(nums, i + 1);
  }
  dfs(nums, 0);

  return res;
}
