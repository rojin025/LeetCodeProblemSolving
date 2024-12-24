//Option1
class Solution {
    public int romanToInt(String s) {
        var map = new HashMap<Character, Integer>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        char arr[] = s.toCharArray();
        int n = arr.length;
        int result =0;
        int current =0, next=0;

        for(int i=0; i<n; i++){
            current = map.get(arr[i]);
            if(i == n-1){
                result += current;
            }else{
                next = map.get(arr[i+1]);
                if(next > current) result -= current;
                else result += current;
            }
            
        }

        return result;

    }
}

//Option2
import java.util.HashMap;

class Solution {
    public int romanToInt(String s) {
        // Create a mapping of Roman numerals to integers
        var map = new HashMap<Character, Integer>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int n = s.length();
        int sum = 0;

        for(int i= n-1 ; i>=0; i--){
            int current = map.get(s.charAt(i));
            if(i!=0 && current > map.get(s.charAt(i-1))){
                sum += current - map.get(s.charAt(i-1));
                i--;
            }else{
                sum += current;
            }
        }
        return sum;
    }
}
