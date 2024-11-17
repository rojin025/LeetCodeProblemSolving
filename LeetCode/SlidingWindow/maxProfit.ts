// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = min;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (i != prices.length - 1 && prices[i] <= min) {
      max = min = prices[i];
    } else if (prices[i] > max) {
      max = prices[i];
    }

    profit = max - min > profit ? max - min : profit;
  }
  return profit;
}

console.log("MaxProfit running.");
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
