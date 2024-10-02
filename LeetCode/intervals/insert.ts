function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res: number[][] = [];

  for (const interval of intervals) {
    if (newInterval === null || interval[1] < newInterval[0]) {
      res.push(interval);
    } else if (interval[0] > newInterval[1]) {
      res.push(newInterval);
      res.push(interval);
      // newInterval = null;
    } else {
      newInterval[0] = Math.min(interval[0], newInterval[0]);
      newInterval[1] = Math.max(interval[1], newInterval[1]);
    }
  }

  return res;
}

console.log("Running insert.");
