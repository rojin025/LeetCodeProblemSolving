/**
    Urls ref
    https://leetcode.com/problems/max-area-of-island/
    https://neetcode.io/problems/max-area-of-island
    


 * @param grid 
 * @returns max connected numbers
 */

function maxAreaOfIsland(grid: number[][]): number {
  if (grid.length === 0 || grid[0] === undefined) return 0;

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const ROWS = grid.length;
  const COLS = grid[0].length;

  function dfs(r: number, c: number): number {
    // Ensure we're within bounds and on an unvisited cell
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) return 0;

    grid[r][c] = 0; // Mark visited

    let curArea = 1;
    for (const [dr, dc] of directions) {
      curArea += dfs(r + dr, c + dc);
    }

    return curArea;
  }

  let area = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) area = Math.max(dfs(r, c), area);
    }
  }

  return area;
}

/**
function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    
    let maxArea = 0;

    // Helper function to perform DFS
    const dfs = (i: number, j: number): number => {
        // Boundary check and check if the cell is land (1)
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return 0;
        }
        
        // Mark the cell as visited by setting it to 0 (water)
        grid[i][j] = 0;

        // Calculate the area by exploring all 4 directions
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    };

    // Traverse the entire grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // If it's land, perform DFS to calculate the area
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
}
    
 */
