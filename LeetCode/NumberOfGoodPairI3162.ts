//3162. Find the Number of Good Pairs I
//https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/
function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  let counter: number = 0;
  let m = nums1.length;
  let n = nums2.length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) counter++;
    }
  }

  return counter;
}
