/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

<<<<<<< HEAD
var robotPaths = function(n, board = makeBoard(n), i = 0, j = 0) {
  let count = 0;
  board.togglePiece(i,j);
  const moveRobot = (addI, addJ) => {
     // is robot position = n, n then count++
     if (i+addI === n-1 && j+addJ === n-1) {
       count++;
     } else {
       count += robotPaths(n,board,i+addI,j+addJ);
       board.togglePiece(i+addI,j+addJ);
     }
  }
  // up? i-1 -1, 0 // no
  if ((i-1) !== -1 && !board.hasBeenVisited(i-1, j)) {
    moveRobot(-1, 0);
  }
  // right? j+1 0,1 // yes
  if ((j+1) !== n && !board.hasBeenVisited(i, j+1)) {
    moveRobot(0, 1);
  }
  // down? i+1
  if ((i+1) !== n && !board.hasBeenVisited(i+1, j)) {
    moveRobot(1, 0);
  }
  // left? j-1
  if ((j-1) !== -1 && !board.hasBeenVisited(i, j-1)) {
    moveRobot(0, -1);
  }
  return (i === n-1 && j === n-1) ? 1 : count;
};
=======
var robotPaths = function(n, board, i, j) {

  // Initialize these if not provided
  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  // No possible paths if you’re off the board
  // or on a piece you shouldn’t be on
  if (!(i >= 0 && i < n && j >= 0 && j < n) ||
      board.hasBeenVisited(i, j)) {
    return 0;
  }
  // One possible path if you’re at the
  // end point (the path that led there)
  if (i === n - 1 && j === n - 1) { return 1; }
  board.togglePiece(i, j);
  var result = robotPaths(n, board, i, j + 1) +
    robotPaths(n, board, i, j - 1) +
    robotPaths(n, board, i + 1, j) +
    robotPaths(n, board, i - 1, j);
  // !!Return the board to its original state!!
  // Toggling the piece back to its original state
  // is vital to this solution, as it allows the
  // algorithm to 'backtrack' from this position for
  // subsequent recursive calls.
  board.togglePiece(i, j);
  return result;
  };

>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
