/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
<<<<<<< HEAD
 * for matrix[m][n], m will equal the "height" index (# of rows) and n is the "width" (# of columns) index
 * 
=======
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

<<<<<<< HEAD
var rotateMatrix = function(matrix, direction = 1) {
  let rotated = [];
  if (matrix.length) {
    let width = matrix[0].length - 1;
    let height = matrix.length - 1;
    for (let m = 0; m <= width; m++) {
      rotated[m] = [];
      for (let n = 0; n <= height; n++) {
        if (direction > 0) rotated[m][n] = matrix[height-n][m]
        else rotated[m][n] = matrix[n][width-m];
      }
    }
  }
  return rotated;
};

var matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 'A'], ['B', 'C', 'D', 'E', 'F'], ['G', 'H', 'I', 'J', 'K']];

console.log(rotateMatrix(matrix, -1)); 
=======
var rotateMatrix = function(matrix, direction ) {
  // Your code here.

  direction = direction || 1;
  var m = matrix.length;
  var n = (matrix[0] && matrix[0].length);
  var output = [];
  // We iterate with i,j in output order to transparently support rectangular arrays
  for (var i = 0; i < n; i++) {
    output[i] = [];
    for (var j = 0; j < m; j++) {
      if (direction > 0) { // rotate clockwise
        output[i][j] = matrix[m - j - 1][i];
      } else if (direction < 0) { // rotate counterclockwise
        output[i][j] = matrix[j][n - i - 1];
      }
    }
  }
  return output;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
