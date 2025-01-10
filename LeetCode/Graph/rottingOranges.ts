/**
 URL
    https://leetcode.com/problems/rotting-oranges/
    https://neetcode.io/problems/rotting-fruit

 * @param grid
 */
function orangesRotting(grid: number[][]): number {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue: number[][] = [];
  let fresh = 0;
  let time = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }
  }

  while (fresh > 0 && queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [currR, currC] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const row = currR + dr;
        const col = currC + dc;
        if (
          row >= 0 &&
          row < grid.length &&
          col >= 0 &&
          col < grid[0].length &&
          grid[row][col] === 1
        ) {
          grid[row][col] = 2;
          queue.push([row, col]);
          fresh--;
        }
      }
    }
    time++;
  }

  return fresh ? -1 : time;
}

/*
function orangesRotting(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;

  function go(x, y, level) {
    if (x < 0 || y < 0) return;
    if (x >= m || y >= n) return;

    if (grid[x][y] === 0) return; // empty

    if (grid[x][y] === 1 || (grid[x][y] > 2 && level < grid[x][y])) {
      grid[x][y] = level;

      go(x + 1, y, level + 1);
      go(x, y + 1, level + 1);
      go(x - 1, y, level + 1);
      go(x, y - 1, level + 1);
    }
  }

  // 0 = empty
  // 1 = fresh
  // 2 = rotten on day 0
  // 3 = rotten on day 1
  // n = rotten on day (n-2)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        go(i + 1, j, 3);
        go(i, j + 1, 3);
        go(i - 1, j, 3);
        go(i, j - 1, 3);
      }
    }
  }

  // check if "1" still exists
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) return -1; // still fresh
    }
  }

  let result = 2;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] >= 2) result = Math.max(result, grid[i][j]);
    }
  }

  return result - 2;
}

*/
