// [ 1, 2, 1, 2, 1]

function minCostClimbingStairs(cost: number[]): number {
  const minSteps = [...cost];

  for (let i = minSteps.length - 3; i >= 0; i--) {
    minSteps[i] += Math.min(minSteps[i + 1], minSteps[i + 2]);
  }

  return Math.min(minSteps[0], minSteps[1]);
}

console.log(" Running MinCostClimbing Stairs");
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
