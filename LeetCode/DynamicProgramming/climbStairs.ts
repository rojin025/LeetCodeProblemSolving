function climbStairs(n: number): number {
  if (n <= 3) return n;

  let one = 1;
  let two = 1;
  let temp = 2;

  for (let i = n - 2; i >= 0; i--) {
    temp = one + two;
    one = two;
    two = temp;
  }

  return two;
}

console.log("climbStairs running");
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
