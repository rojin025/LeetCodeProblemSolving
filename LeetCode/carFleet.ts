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
  let currTimeToTar = Number.NEGATIVE_INFINITY;

  //   console.log(pairs);

  const timeToTarget = new Array(positionLength);
  for (let i = 0; i < positionLength; i++) {
    timeToTarget[i] = (target - pairs[i][0]) / pairs[i][1];
    // console.log(timeToTarget[i]);

    if (timeToTarget[i] > currTimeToTar) {
      currTimeToTar = timeToTarget[i];
      fleetCount++;
    }
  }

  console.log(fleetCount);
  return fleetCount;
}

console.log("carFleet running.");
// console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
console.log(carFleet(10, [0, 4, 2], [2, 1, 3]));

/**
 function carFleet(target: number, position: number[], speed: number[]): number {
    // Array to represent the speed of the car at a given position index.
    const traffic = new Array(target + 1).fill(0);
    for (let i = 0; i < position.length; i++) traffic[position[i]] = speed[i];
    
    let fleets = 0, frontCarTime = 0;

    // For each car, from closest to furthest...
    for (let i = traffic.length - 1; i >= 0; i--) {
        if (traffic[i] !== 0) { // If there is a car here...

            // Calc the time to reach the target.
            const time = (target - i) / traffic[i];
            
            // Car is slower than what we have seen before? This forms a new fleet.
            if (time > frontCarTime) {
                fleets++; // Inc fleets
                frontCarTime = time; // Update frontCarTime to check against the next cars positioned before this one.
            }
        }
    }

    return fleets;
}
 */
