function eraseOverlapIntervals(intervals: number[][]): number {
  const nonOverlapIntervals: number = 0;

  return nonOverlapIntervals;
}

console.log("Running Erase Overlap Intervals.");

// output = 1
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 4],
    [1, 4],
  ])
);

// output = 0
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 4],
  ])
);
