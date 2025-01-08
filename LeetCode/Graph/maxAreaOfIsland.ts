function maxAreaOfIsland(grid: number[][]): number {
  if ((grid.length = 0)) return 0;
  let area = 0;

  return area;
}

/**



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
