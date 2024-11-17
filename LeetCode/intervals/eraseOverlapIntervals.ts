//https://neetcode.io/problems/non-overlapping-intervals
//https://leetcode.com/problems/non-overlapping-intervals/description/

function eraseOverlapIntervals(intervals: number[][]): number {
  let numToErase: number = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  console.log(intervals);

  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];

    if (start < prevEnd) {
      numToErase++;
      console.log("Removing", Math.max(prevEnd, end));
      prevEnd = Math.min(prevEnd, end);
    } else {
      prevEnd = end;
    }
  }

  return numToErase;
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

// output = 2
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);

// output = 2
console.log(
  eraseOverlapIntervals([
    [1, 100],
    [1, 11],
    [2, 12],
    [11, 22],
  ])
);

// Check it out
function eraseOverlapIntervals2(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0,
    lastEl = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= lastEl) {
      lastEl = intervals[i][1];
    } else {
      count++;
    }
  }

  return count;
}
