function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let target = strs[0];
  let strsLength = strs.length;

  for (let char = 0; char < strs[0].length; char++) {
    let isPrefixCounter = 0;

    for (let curStr = 0; curStr < strsLength; curStr++) {
      if (strs[curStr].startsWith(target.substring(0, char))) {
        isPrefixCounter++;
      }
    }

    if (isPrefixCounter === strsLength) {
      prefix = target.substring(0, char);
    }
  }

  return prefix;
}

console.log("Longest Common Prefix.");

console.log("-->", longestCommonPrefix(["flower", "flow", "flight"]));
console.log("-->", longestCommonPrefix(["flower", "blow", "alight"]));
// console.log("target".substring(0, 2));
