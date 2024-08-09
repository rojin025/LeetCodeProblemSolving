/**
 https://leetcode.com/problems/valid-sudoku/
 36. Valid Sudoku
 */

function isValidSudoku(board: string[][]): boolean {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map(); // key = (r/3) * 3 + c/3

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell === ".") continue;
      if (
        rows.get(row)?.has(cell) ||
        cols.get(col)?.has(cell) ||
        squares.get(Math.floor(row / 3) * 3 + Math.floor(col / 3))?.has(cell)
      )
        return false;

      cols.set(col, new Set(cols.get(col)).add(cell));
      rows.set(row, new Set(rows.get(row)).add(cell));
      squares.set(
        Math.floor(row / 3) * 3 + Math.floor(col / 3),
        new Set(squares.get(Math.floor(row / 3) * 3 + Math.floor(col / 3))).add(
          cell
        )
      );
    }
  }

  return true;
}
