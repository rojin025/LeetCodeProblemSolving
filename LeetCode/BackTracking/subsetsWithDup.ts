//https://leetcode.com/problems/subsets-ii/description/
// https://neetcode.io/problems/subsets-ii

function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort();

  function backtrack(start: number, subset: number[]) {
    res.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  }

  backtrack(0, []);
  return res;
}

console.log("Running SubsetsWithDup");
console.log(subsetsWithDup([1, 2, 2]));
