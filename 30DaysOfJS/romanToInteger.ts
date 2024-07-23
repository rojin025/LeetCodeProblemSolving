function romanToInt(s: string): number {
  const romanIntegerMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prev = 0;
  let cur = 0;
  let romanNumbers = s.split("");

  for (let i = romanNumbers.length; i >= 0; i--) {
    cur = Number(romanNumbers[i]);

    if (cur > prev) {
      result = result + Number(romanNumbers[i]);
    } else {
      result = result - Number(romanNumbers[i]);
    }

    prev = cur;
  }

  return result;
}
