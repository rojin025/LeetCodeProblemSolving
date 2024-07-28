// public boolean isPalindrome(int x) {                //  123
//     if (x<0 || (x!=0 && x%10==0)) return false;

//     int rev = 0;                                    //  0      | 3      | 32
//     while (x > rev){                                // 123 > 0 | 12 > 0
//     	rev = rev * 10 + x % 10; // Reminder mod    //  0 + 3  | 30 + 2
//     	x = x/10;    // remove last num             //  12     | 1
//     }
//     return (x==rev || x==rev/10);
// }

function isPalindrome(x: number): boolean {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  console.log("x --> ", x);

  let rev: number = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    // console.log(rev);
    x = Math.floor(x / 10);
  }
  console.log("rev --> ", rev);

  return x === rev || x === Math.floor(rev / 10);
}

// Example usage:
const num: number = 123;
console.log(isPalindrome(num)); // Output: true

/*in order to know if the number we have is a palindrome with out converting it to string, we need to make a mirror of it and see if it equals the original number*/
function isPalindrome2(x: number): boolean {
  //negative numbers cannot be palindroms
  if (x < 0) return false;

  //first we need to make a copy of the original number so we can mess around with
  let source: number = x;

  //now we need to create the variable that will containe the iror of the original number
  let mirror: number = 0;

  //now we need to turn the source into the mirror
  //we can do that by cutting the right most digit from the source and  adding it to the end of the mirror
  //integer deviding the source by 10 will get us the right most digit as the remainder
  //multiplying the mirror by 10 then adding the remainder digit will place it at the end of the mirror

  while (source > 0) {
    mirror = mirror * 10 + (source % 10);
    source = Math.floor(source / 10);
  }

  return x === mirror;
}
