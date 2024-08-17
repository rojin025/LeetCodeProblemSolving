/**
https://leetcode.com/problems/generate-parentheses/

 */
function generateParentheses(n: number): string[] {
  const parentheses: string[] = [];

  function backTrack(
    openParens: number,
    closeParens: number,
    currentParen: string
  ) {
    if (closeParens === n && openParens === n) {
      parentheses.push(currentParen);
      return;
    }

    if (openParens < n) {
      backTrack(openParens + 1, closeParens, currentParen + "(");
    }

    if (closeParens < openParens) {
      backTrack(openParens, closeParens + 1, currentParen + ")");
    }
  }

  backTrack(0, 0, "");
  return parentheses;
}

console.log("Running generateParentheses. Happy coding. :)");
console.log(generateParentheses(2));
console.log(generateParentheses(3));

/**
 function generateParenthesis(n: number): string[] {
    let ans: string[] = []

    const bt = (left: number, right: number, str: string) => {
        if (str.length === n * 2) {
            ans.push(str)
            return
        }
        // 是否可以加左掛號
        if (left < n) {
            bt(left + 1, right, str.concat('('))
        }
        // 是否可以加右掛號
        if (left > right) {
            bt(left, right + 1, str.concat(')'))
        }

    }

    bt(1, 0, '(')

    return ans
};
 */
