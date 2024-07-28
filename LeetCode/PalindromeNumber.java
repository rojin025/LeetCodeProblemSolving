class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;

        String str = Integer.toString(x);
        int n = str.length();
        int left =0, right = n-1;

        while(left < right){
            if(str.charAt(left) == str.charAt(right)){
                left++;
                right--;
            }else{
                return false;
            }
        }

        return true;

    }

}
//Approach2: without converting to String
