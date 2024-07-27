/**
 
https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript

return Object.keys(obj).length?false:true;
 */

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length ? false : true;
}
