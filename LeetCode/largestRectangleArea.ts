/**
 https://leetcode.com/problems/largest-rectangle-in-histogram/

 * @param heights 
 */

function largestRectangleArea(heights: number[]): number {
  let larArea = 0;
  const stack: [number, number][] = []; // pair: (index, height)

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop()!;
      larArea = Math.max(larArea, height * (i - index));
      start = index;
    }

    stack.push([i, heights[i]]);
  }

  //   for (const [index, height] of stack) {
  //     larArea = Math.max(larArea, height * (heights.length - index));
  //   }

  return larArea;
}

console.log("Largest Rectangle Area running.");
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

/**
  good solution.
/**
 
var largestRectangleArea = function (heights) {

    if (heights.length == 0) return 0;

    if (heights.length == 1) return heights[0];


    let max = 0, stack = [-1];
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = i - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }

        stack.push(i);
    }

    while (stack[stack.length - 1] !== -1) {
        let height = heights[stack.pop()];
        let width = heights.length - stack[stack.length - 1] - 1;
        max = Math.max(max, height * width);
    }

    return max;
};

 */
