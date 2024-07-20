type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**
 Note:

 const myFunction = function(...arr){         //Here `arr` is received in the function (i.e. arr is the parameter to the function), so it's REST
    //do Something
}

const arr = [1,2,3];
myFunction(...arr);         //Here we are passing `arr` to the functions (i.e. arr is the parameters passed to the function), so it's SPREAD
 
  */
