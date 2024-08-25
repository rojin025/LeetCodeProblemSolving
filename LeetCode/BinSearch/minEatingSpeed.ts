/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    let totalTime = 0;

    for (const pile of piles) {
      totalTime += Math.ceil(pile / mid);
    }

    if (totalTime <= h) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
}

console.log("minEatingSpeed running.");
console.log(minEatingSpeed([3, 6, 7, 11], 8));
