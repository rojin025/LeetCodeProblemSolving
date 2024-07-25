function topKFrequent(nums: number[], k: number): number[] {
  const count: { [key: number]: number } = {};
  const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  nums.forEach((n) => (count[n] = (count[n] || 0) + 1));
  Object.keys(count).forEach((n) => freq[count[parseInt(n)]].push(parseInt(n)));

  const res: number[] = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }

  return res;
}
