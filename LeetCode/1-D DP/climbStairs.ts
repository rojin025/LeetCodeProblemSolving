function climbStairs(n: number): number {
  let one = 1;
  let two = 1;
  let temp = 2;

  for (let i = n - 2; i >= 0; i++) {
    temp = one + two;
    one = two;
    two = temp;
  }

  return one;
}

console.log("climbStairs running");
