function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res: number[][] = [];

  for (const interval of intervals) {
    if (newInterval === null || interval[1] < newInterval[0]) {
      res.push(interval);
    }
  }

  return res;
}
