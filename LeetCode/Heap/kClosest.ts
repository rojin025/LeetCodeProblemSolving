import { ListNode } from "./PriorityQueue/listNode";
import { MinPriorityQueue } from "./PriorityQueue/minPriorityQueue";

function kClosest(points: number[][], k: number): number[][] {
  const closestPoint: number[][] = [];
  const minHeap = new MinPriorityQueue();

  for (const [x, y] of points) {
    const distance = x ** 2 + y ** 2;
    const node = new ListNode(distance, [distance, x, y]);
    minHeap.enqueue(node);
  }

  for (let i = 0; i < k; i++) {
    const [_, x, y] = minHeap.dequeueVals();
    closestPoint.push([x, y]);
  }

  return closestPoint;
}

function kClosestClean(points: number[][], k: number): number[][] {
  return points
    .sort((a, b) => {
      let getDistance = (point) =>
        Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
      return getDistance(a) - getDistance(b);
    })
    .slice(0, k);
}

// function kClosest2(points: number[][], k: number): number[][] {
//   function getDistance(point: number[]) {
//     return Math.sqrt(point[0] ** 2 + point[1] ** 2);
//   }

//   const queue = new MinPriorityQueue({
//     priority: (p) => getDistance(p),
//   });

//   for (const p of points) {
//     queue.enqueue(p);
//   }

//   const res = [];
//   while (k--) {
//     res.push(queue.dequeue().element);
//   }

//   return res;
// }
