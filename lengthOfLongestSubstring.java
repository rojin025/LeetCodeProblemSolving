//Leetcode3: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
class Solution {
    public int lengthOfLongestSubstring(String s) {
        var set = new HashSet<Character>();

        int max =0;
        int start =0;
        int end =0;

        while(end < s.length()){
            if(!set.contains(s.charAt(end))){
                if(end - start + 1 > max){
                    max = end - start + 1;
                }
                set.add(s.charAt(end));
                end++;
            }
            else {
                set.remove(s.charAt(start));
                start++;
            }
        }

        return max;
    }
}
