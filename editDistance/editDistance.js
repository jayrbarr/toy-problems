// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
<<<<<<< HEAD
  // Levenshtein Distance
  // https://www.cuelogic.com/blog/the-levenshtein-algorithm
  // str1 = 'HYUNDAI', str2 = 'HONDA'
  //      H  Y  U  N  D  A  I
  //   0  1  2  3  4  5  6  7
  // H 1  0  1  2  3  4  5  6
  // O 2  1  1  2  3  4  5  6
  // N 3  2  2  2  2  3  4  5
  // D 4  3  3  3  3  2  3  4
  // A 5  4  4  4  4  3  2 [3] === ANSWER
  
  // if either string empty, return length of the other string
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  // initialize matrix
  let matrix = [];

  for (let x = 0; x <= str1.length; x++ ) {
    matrix[x] = [x];
  }

  for (let y = 1; y <= str2.length; y++ ) {
    matrix[0][y] = y;
  }

  for (let x = 1; x <= str1.length; x++) {
    for (let y = 1; y <= str2.length; y++) {
      if (str1[x - 1] === str2[y - 1]) {
        matrix[x][y] = matrix[x - 1][y - 1];
      } else {
        matrix[x][y] = Math.min(
          matrix[x - 1][y] + 1,
          matrix[x - 1][y - 1] + 1,
          matrix[x][y - 1] + 1
        );
      }
    }
  }

  return matrix[str1.length][str2.length];
}

// console.log(editDistance('cat', 'cut'));
// console.log(editDistance('wednesday', 'sunday'));
// console.log(editDistance('hackerrank', 'hackreactor'));



=======
  // Your code here.

  if(a.length === 0) return b.length; 
  if(b.length === 0) return a.length; 
  var matrix = [], i, j;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i-1][j-1] + 1,
          matrix[i][j-1] + 1, 
          matrix[i-1][j] + 1  )
      }
    }
  }
  return matrix[b.length][a.length];
  }
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
