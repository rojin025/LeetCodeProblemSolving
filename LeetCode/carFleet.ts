/**
 https://leetcode.com/problems/car-fleet/
 
 * @param target
 * @param position
 * @param speed
 */
function carFleet(target: number, position: number[], speed: number[]): number {
  const positionLength = position.length;
  const pairs = position.map((p, i) => [p, speed[i]]);

  // sorting in decending order
  pairs.sort((a, b) => b[0] - a[0]);

  let fleetCount = 0;

  console.log(pairs);
  return 0;
}

console.log("carFleet running.");
carFleet(100, [0, 2, 4], [4, 2, 1]);
