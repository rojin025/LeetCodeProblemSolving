function longestCommonPrefix(strs: string[]): string {
  let strsLength = strs.length;
  let prefix = strs[0];

  if (strsLength === 0) return prefix;

  for (let curStr = 1; curStr < strsLength; curStr++) {
    while (strs[curStr].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

console.log("Longest Common Prefix.");

console.log("-->", longestCommonPrefix(["flower", "flow", "flight"]));
console.log("-->", longestCommonPrefix(["flower", "blow", "alight"]));
console.log(
  "-->",
  longestCommonPrefix(["flower", "flower", "flower", "flower"])
);
// console.log("targetStr".substring(0, 2));

/**
 * JAVA 
 * 
 * class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) return "";
        String prefix = strs[0];
        for(int i=1; i<strs.length; i++){
            while(strs[i].indexOf(prefix) !=0){
                prefix = prefix.substring(0,prefix.length()-1);
            }
        }
        return prefix;
    }
}
 */
