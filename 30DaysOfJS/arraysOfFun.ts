type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    if (functions.length === 0) return x;

    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**
 * applying Reduce
 * 
 *    return function(x) { 
        return functions.reverse().reduce((prev: number, curr: F) => {
            return curr(prev)
        },x)
        
    }
 */
