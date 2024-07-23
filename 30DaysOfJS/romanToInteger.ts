function romanToInt(s: string): number {
  const romanIntMap = new Map();

  romanIntMap.set("I", 1);
  romanIntMap.set("V", 5);
  romanIntMap.set("X", 10);
  romanIntMap.set("L", 50);
  romanIntMap.set("C", 100);
  romanIntMap.set("D", 500);
  romanIntMap.set("M", 1000);

  let result = 0;
  let prev = 0;
  let cur = 0;
  let romanNumbers: string[] = s.split("");

  //   console.log(romanNumbers);

  for (let i = romanNumbers.length - 1; i >= 0; i--) {
    cur = romanIntMap.get(romanNumbers[i]);
    // console.log(cur);

    if (cur >= prev) {
      result = result + romanIntMap.get(romanNumbers[i]);
    } else {
      result = result - romanIntMap.get(romanNumbers[i]);
    }

    prev = cur;
  }

  return result;
}

console.log("running");

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
