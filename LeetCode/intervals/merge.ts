function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const res: number[][] = [intervals[0]];

  for (let i = 1; i <= intervals.length - 1; i++) {
    const prevEnd = intervals[i - 1][1];
    const start = intervals[i][0];
    const end = intervals[i][1];

    if (prevEnd >= start) {
      res[res.length - 1][1] = Math.max(end, prevEnd);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

console.log("Merge Runnung. Happy Coding ;)");

// [[1,5],[6,7]]
console.log(
  merge([
    [1, 3],
    [1, 5],
    [6, 7],
  ])
);

// [[1, 3]]
console.log(
  merge([
    [1, 2],
    [2, 3],
  ])
);
