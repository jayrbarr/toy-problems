/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/


<<<<<<< HEAD
const exampleBoard = 
`735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429`



function sudokuChecker(board) {
  // CHECK HELPERS
  let complete = true;
  const check = section => {
    section.sort();
    complete = complete && section.reduce((pass, num, index) => pass && parseInt(num) === index+1, true)
  }

  // CHECK ROWS
  let rows = board.split('\n');
  rows.forEach(row => check(row.split('')));

  // CHECK COLUMNS
  for (let i=0; i<9; i++) {
    let column = rows.map(row => row[i]);
    check(column);
  }

  // CHECK 3x3 SUB-GRIDS
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      let grid = [];
      for (let k=0; k<3; k++) {
        grid = grid.concat(rows[i*3+k].slice(j*3, j*3+3).split(''));
      }
      check(grid);
    }
  }
  return complete ? 'solved' : 'invalid';
}

// console.log(sudokuChecker(exampleBoard));
=======
// Helper function to ensure a given array
// only contains all unique digits 1...9
function hasConflicts(numbers) {
  return (
    // check for only 9 items
    numbers.length !== 9 ||
    // check for a total of 45 (sum of unique digits 1 to 9)
    numbers.reduce((sum, digit) => sum + digit, 0) != 45 ||
    // check that the collection isn't 9 5's (also adds up to 45)
    numbers.indexOf('5') !== numbers.lastIndexOf('5')
  )
}

// Helper function to convert a string-encoded board
// into a parseable 2D matrix of numbers
function convertBoardStringToMatrix(boardString) {
  return boardString.split('\n').map(function(row) {
    return row.split('').map(Number)
  })
}

function sudokuChecker(board) {
  // Your code here.
  

  // Convert string into 2D matrix
  const solution = convertBoardStringToMatrix(board)

  // Loop through rows and columns
  for (let i = 0; i < 9; i++) {
    const row = solution[i]
    const col = solution.map((row) => row[i])

    if (hasConflicts(row) || hasConflicts(col)) {
      return 'invalid'
    }
  }

  // Loop through 3x3 squares
  // Loop through columns in 3's
  for (let col = 0; col < 9; col += 3) {
    // Loop through rows in 3's
    for (let row = 0; row < 9; row += 3) {
      // Get rows of squares by splicing them from board rows
      const row1 = solution[row].splice(0, 3) // destructive
      const row2 = solution[row + 1].splice(0, 3)
      const row3 = solution[row + 2].splice(0, 3)

      // Concatenate the rows into an array for checking
      const square = row1.concat(row2, row3)
      if (hasConflicts(square)) {
        return 'invalid'
      }
    }
  }

  return 'solved'
  }
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
