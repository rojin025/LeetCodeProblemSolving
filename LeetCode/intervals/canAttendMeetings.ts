import { Interval } from "./Interval";

function canAttendMeetings(intervals: Interval[]): boolean {
  console.log(intervals.sort((a, b) => a.start - b.start));

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }

  return true;
}

console.log("Running Can Attend Meetings.");

console.log(
  canAttendMeetings([
    { start: 5, end: 10 },
    { start: 0, end: 30 },
    { start: 15, end: 20 },
  ])
);

console.log(
  canAttendMeetings([
    { start: 5, end: 10 },
    { start: 0, end: 3 },
  ])
);
