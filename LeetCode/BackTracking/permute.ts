//https://leetcode.com/problems/permutations/

function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  if (nums.length === 1) {
    res.push([nums[0]]);
    return res;
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainingNums = nums.filter((_, j) => i !== j);

    const perms = permute(remainingNums);

    for (const perm of perms) {
      perm.push(num);
      res.push([...perm]);
    }
  }

  return res;
}
