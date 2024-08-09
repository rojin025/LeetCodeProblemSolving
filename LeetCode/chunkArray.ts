type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: JSONValue[], size: number): JSONValue[][] {
  let returnArray: JSONValue[][] = [];
  let index = 0;

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    let chunkArray: JSONValue[] = [];
    for (let j = 0; j < size; j++) {
      if (index < arr.length) {
        chunkArray.push(arr[index]);
        index++;
      } else {
        break;
      }
    }
    returnArray.push(chunkArray);
  }
  return returnArray;
}

console.log("Running Chuck");
// console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 2, 3, 4, 5], 4));

/**
 Better solution

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const chunks = [];
    while (arr.length > 0) {
        chunks.push(arr.splice(0, size))
    }
    return chunks;
};

 */
