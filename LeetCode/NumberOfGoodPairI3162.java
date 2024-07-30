//3162. Find the Number of Good Pairs I
//https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/
class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int count =0;
        int m = nums1.length, n = nums2.length;

        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if((nums1[i]%(nums2[j]*k))==0) count++;
            }
        }

        return count;
    }
}
