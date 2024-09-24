// https://neetcode.io/problems/last-stone-weight
// https://leetcode.com/problems/last-stone-weight/solutions/4583094/last-stone-weight-using-internal-typescript-priorityqueue-datastructure-internal-library/

import { MaxPriorityQueue } from "./PriorityQueue/MaxPriorityQueue";

function lastStoneWeight(stones: number[]): number {
  if (!stones) return 0;
  if (stones.length === 1) return stones[0];

  const pq = new MaxPriorityQueue();

  for (const stone of stones) pq.enqueue(stone);

  while (pq.size() > 1) {
    const b = pq.dequeue();
    const a = pq.dequeue();
    pq.enqueue(a - b);
  }

  return pq.dequeue();
}

console.log("lastStoneWeight running:");
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
