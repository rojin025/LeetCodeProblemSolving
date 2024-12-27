// https://leetcode.com/problems/car-fleet/

function carFleet(target: number, position: number[], speed: number[]): number {
  const positionLength = position.length;
  const pairs = position.map((p, i) => [p, speed[i]]);

  // sorting in decending order
  pairs.sort((a, b) => b[0] - a[0]);

  let fleetCount = 0;
  let currTimeToTar = Number.NEGATIVE_INFINITY;

  const timeToTarget = new Array(positionLength);
  for (let i = 0; i < positionLength; i++) {
    timeToTarget[i] = (target - pairs[i][0]) / pairs[i][1];

    if (timeToTarget[i] > currTimeToTar) {
      currTimeToTar = timeToTarget[i];
      fleetCount++;
    }
  }

  return fleetCount;
}
