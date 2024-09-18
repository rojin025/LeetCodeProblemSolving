// https://leetcode.com/problems/combination-sum/solutions/5683835/explained-typescript-runtime-beats-98-10

function combinationSum(candidates: number[], target: number): number[][] {
  let combinedSum: number[][] = [];
  const length = candidates.length;

  function backTack(target: number, curCombination: number[], index: number) {
    if (target === 0) return combinedSum.push([...curCombination]);

    if (target < 0) return;

    for (let i = index; i < length; i++) {
      const candidate = candidates[i];

      curCombination.push(candidate);
      backTack(target - candidate, curCombination, i);
      curCombination.pop();
    }
  }

  backTack(target, [], 0);

  return combinedSum;
}
