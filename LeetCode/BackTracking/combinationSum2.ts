// https://neetcode.io/problems/combination-target-sum-ii

//https://leetcode.com/problems/combination-sum-ii/

function combinationSum2(candidates: number[], target: number): number[][] {
  let res: number[][] = [];
  candidates.sort();

  function backTack(left: number, candidate: number, combination: number[]) {
    if (candidate === 0) return res.push([...combination]);

    if (candidate < 0) return;

    for (let i = left; i < candidates.length; i++) {
      if (i > left && candidates[i] === candidates[i - 1]) continue;

      combination.push(candidates[i]);
      backTack(i + 1, candidate - candidates[i], combination);
      combination.pop();
    }
  }

  backTack(0, target, []);
  return res;
}

console.log("Combination sum 2 running.");
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
