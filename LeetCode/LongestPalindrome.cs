// https://leetcode.com/problems/longest-palindrome/
// leetcode 409
public class Solution {
    public int LongestPalindrome(string s) {
        int[] char_counts = new int[128];
        foreach (char c in s.ToCharArray()){
            char_counts[c]++;
            //Console.WriteLine(char_counts[c]);
        }
        
        int result =0;
        foreach(int char_count in char_counts){
            result += char_count/2 * 2;
            if(result % 2 ==0 && char_count %2==1){
                result += 1;
            }
        }
        
        return result;
    }
}
