function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let area = 0;

  while (l < r) {
    area = Math.max(Math.min(height[r], height[l]) * (r - l), area);
    if (height[l] > height[r]) r--;
    else l++;
  }
  return area;
}

console.log("Max Area.");
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
