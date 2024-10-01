function rob(nums: number[]): number {
  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    const maxAmt = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = maxAmt;
  }

  return rob2;
}
