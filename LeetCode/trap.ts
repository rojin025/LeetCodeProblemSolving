/**
 https://leetcode.com/problems/trapping-rain-water/
 */
function trap(height: number[]): number {
  if (!height || !height.length) return 0;

  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];
  let trapedWater = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      trapedWater += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      trapedWater += rightMax - height[r];
    }
  }

  return trapedWater;
}

console.log("Traped water running.");
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
