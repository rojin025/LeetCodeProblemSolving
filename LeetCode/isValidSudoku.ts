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

console.log("IsValidSudoku running.");
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

/**
 //Best solution

 function isValidSudoku(board: string[][]): boolean {
  const subBoxesSets = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => new Set<string>()),
  );

  for (let r = 0; r < board.length; r++) {
    const rowSet = new Set<string>();

    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '.') continue;

      const cr = Math.floor(c / 3);
      const cc = Math.floor(r / 3);
      const boxSet = subBoxesSets[cc][cr];

      const num = board[r][c];

      if (rowSet.has(num)) return false;
      if (boxSet.has(num)) return false;

      boxSet.add(num);
      rowSet.add(num);
    }
  }

  for (let c = 0; c < board.length; c++) {
    const colSet = new Set<string>();

    for (let r = 0; r < board[c].length; r++) {
      if (board[r][c] === '.') continue;

      const num = board[r][c];

      if (colSet.has(num)) return false;

      colSet.add(num);
    }
  }

  return true;
}
  
 */
