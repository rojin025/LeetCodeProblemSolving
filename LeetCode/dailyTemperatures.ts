// https://leetcode.com/problems/daily-temperatures/

function dailyTemperatures(temperatures: number[]): number[] {
  const temps = new Array(temperatures.length).fill(0);
  const stack: [number, number][] = []; // pair: [temp, index]

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
      const [stackTemp, stackIdx] = stack.pop()!;
      temps[stackIdx] = i - stackIdx;
    }
    stack.push([temp, i]);
  }

  return temps;
}

console.log("Daily Temperatures running. Happy coding.");
console.log(dailyTemperatures([1, 2, 3, 4, 5]));
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

/**
 function dailyTemperatures(temperatures: number[]): number[] {
    const stack: Array<number> = [];
    const result = new Array(temperatures.length);
    result.fill(0)
    
    for(let i = 0, len = temperatures.length; i < len; i++) {
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        
        stack.push(i);
    }
    
    return result;
};
 */
