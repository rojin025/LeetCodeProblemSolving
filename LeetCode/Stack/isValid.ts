/**
20. valid parentheses

Problem Link
 https://leetcode.com/problems/valid-parentheses/
 https://neetcode.io/problems/validate-parentheses

Resources Additional links:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

 */

const bracketsClosed: { [key: string]: string } = {
  "]": "[",
  "}": "{",
  ")": "(",
};

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char in bracketsClosed) {
      if (bracketsClosed[char] !== stack.pop()) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([])"));
