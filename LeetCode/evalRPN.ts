/**
 https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */

function evalRPN(token: string[]): number {
  let stack: string[] = [];

  for (let i = 0; i < token.length; i++) {
    stack.push(token[i]);
    if (["+", "-", "*", "/"].includes(token[i])) {
      stack.push(
        evaluate(stack.pop()!, Number(stack.pop()!), Number(stack.pop()!))
      );
    }
  }

  return Number(stack[0]);
}

function evaluate(operator: string, b: number, a: number): string {
  switch (operator) {
    case "+":
      return String(a + b);
    case "-":
      return String(a - b); // 2 - 1
    case "*":
      return String(a * b);
    case "/":
      return String((a / b) | 0); // 0 willturncate our quoting toward Zero.
    default:
      return "00";
  }
}

console.log("RPM running.");
console.log(evalRPN(["2", "1", "+", "3", "*"]));

/**
 function evalRPN(tokens: string[]): number {
    

    let stack: number[] = []

    for(let item of tokens){
        if(item!== "+" && item !=="-" && item!== "*" && item!== "/"){
            stack.push(Number(item))
        }else{
            
            let b: number= stack.pop()
            let a: number= stack.pop()
            
            if(item == "+") {stack.push(a+b)}
            else if(item == "-") {stack.push(a-b)}
            else if(item == "*"){ stack.push(a*b)}
            else {stack.push((a-a%b) / b)}
            
        }
    }
    
    return stack.pop()
};
 */
