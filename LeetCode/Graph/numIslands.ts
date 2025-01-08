// https://neetcode.io/problems/count-number-of-islands
// https://leetcode.com/problems/number-of-islands/

// Easy to understand
// https://leetcode.com/problems/number-of-islands/solutions/3869056/beats-95-easy-to-understand-by-prestonbo-bafd/

type Direction = [number, number];

const directions: Record<string, Direction> = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
};

function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  const ROWS = grid.length;
  const COLS = grid[0].length;
  let island = 0;

  const dfs = (r: number, c: number) => {
    // Base case
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === "0") return;

    grid[r][c] = "0"; // Marked as visited

    for (const dir in directions) {
      const [dirRow, dirCol] = directions[dir];
      // rec call
      dfs(r + dirRow, c + dirCol);
    }
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1") {
        dfs(r, c);
        island++;
      }
    }
  }

  return island;
}

/**
[
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]
 */

/**
Clean Code

function numIslands(grid: string[][]): number {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (x: number, y: number) => {
        if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === "0") {
            return;
        }

        grid[x][y] = "0";

        dfs(x+1, y);
        dfs(x, y+1);
        dfs(x-1, y);
        dfs(x, y-1);
    };

    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};
 */
