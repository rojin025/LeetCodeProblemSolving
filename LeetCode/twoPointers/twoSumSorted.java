class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int result[] = new int[2];

        int left=0, right = numbers.length-1;

        while(left<right){
            int sum = numbers[left] + numbers[right];
            if(sum == target) {
                result[0] = left+1;
                result[1] = right+1;
                return result;
            }
            else if(sum > target){
                right--;
            }else{
                left++;
            }
        }

        return result;
    }
}


/**

l     r
2,7,11,15

17>9
13>9
9=9 [l,r]
 */
