type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  // let isTrue = true;
  let returnArray: Obj[][] = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    let chunkArray: Obj[] = [];
    for (let j = 0; j < arr.length; j++) {
      chunkArray.push(arr[j]);
    }
    returnArray.push(chunkArray);
  }
  return returnArray;
}
