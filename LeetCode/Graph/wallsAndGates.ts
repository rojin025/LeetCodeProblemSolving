/**
 * Calculate the minimum distance from multiple sources using BFS.
 * @param grid - The 2D grid containing islands and treasures.
 */
function islandsAndTreasure(grid: number[][]): void {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // Right, Down, Left, Up
  const queue: [number, number, number][] = []; // [row, col, distance]
  const visit = new Set<string>();

  // Initialize the queue with all sources (cells with 0).
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0) {
        queue.push([r, c, 0]); // Start with distance 0
        visit.add(`${r},${c}`);
      }
    }
  }

  // Perform BFS from all sources.
  while (queue.length > 0) {
    const [r, c, dist] = queue.shift()!;

    // Update the grid with the current distance.
    grid[r][c] = dist;

    // Explore all four directions.
    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;

      // Check bounds, visited, and blocked cells.
      if (
        newRow >= 0 &&
        newRow < ROWS &&
        newCol >= 0 &&
        newCol < COLS &&
        !visit.has(`${newRow},${newCol}`) &&
        grid[newRow][newCol] !== -1
      ) {
        queue.push([newRow, newCol, dist + 1]);
        visit.add(`${newRow},${newCol}`);
      }
    }
  }
}

class Solution {
  islandsAndTreasure(grid: number[][]): void {
    const ROWS: number = grid.length;
    const COLS: number = grid[0].length;
    const visit: Set<string> = new Set();
    const q: Array<[number, number]> = []; // Use an array as a queue

    const addCell = (r: number, c: number): void => {
      if (
        Math.min(r, c) < 0 ||
        r >= ROWS ||
        c >= COLS ||
        visit.has(`${r},${c}`) ||
        grid[r][c] === -1
      ) {
        return;
      }
      visit.add(`${r},${c}`);
      q.push([r, c]);
    };

    // Initialize the queue with all cells containing 0
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c] === 0) {
          q.push([r, c]);
          visit.add(`${r},${c}`);
        }
      }
    }

    let dist: number = 0;
    while (q.length > 0) {
      const size = q.length;
      for (let i = 0; i < size; i++) {
        const [r, c] = q.shift()!;
        grid[r][c] = dist;
        addCell(r + 1, c);
        addCell(r - 1, c);
        addCell(r, c + 1);
        addCell(r, c - 1);
      }
      dist += 1;
    }
  }
}
