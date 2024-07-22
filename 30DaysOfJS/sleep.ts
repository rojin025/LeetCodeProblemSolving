async function sleep(millis: number): Promise<void> {
  return new Promise<void>((res) => setTimeout(res, millis));
}

/**
 * https://leetcode.com/problems/sleep/solutions/3525419/promise-examples-dry-run-usecase-o-1-js-ts-beginner-friendly-day11
 */
