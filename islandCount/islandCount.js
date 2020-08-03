/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
<<<<<<< HEAD
  let count = 0;
  const rowStrings = mapStr.split('\n');
  const rows = rowStrings.map(row => row.split(''));
  const width = rows[0].length;
  const height = rows.length;
  rows.forEach((row, i) => {
    let connected = false;
    row.forEach((space, j) => {
      connected = (space === '0' && connected) || (space === '0' && i < height-1 && (j === width-1 || row[j+1] === '0') && rows[i+1][j]==='0');
      if (!connected && space === '0' && (j+1 === width || row[j+1] === '.') && (i+1 === height || rows[i+1][j] === '.')) count++;
    });
  });
  return count;
}  

// var inputs = ['.0...\n.00..\n....0', '..000.\n..000.\n..000.\n.0....\n..000.', '..000.\n..0...\n..0.0.\n..0...\n..000.', '0....0\n......\n..00..\n......\n0....0', '00...0\n0...00\n......\n0.0.0.\n0.....', '0...0\n0...0\n00000', '0...0\n..0..\n0...0', '.', '0', '...\n..0\n.00', '.....\n..0..\n.000.\n..0..\n.....', '00..00\n..00..\n00..00\n..00..'];

// var outputs = [2, 3, 2, 5, 5, 1, 5, 0, 1, 1, 1, 6];

// inputs.forEach(function (input, i) {
//   console.log(countIslands(input));
// });
=======
  // Your code here.

  var islands = 0;
  var mapArr = mapStr.split('\n').map(function(row) {
    return row.split('');
  })
 
  function deleteIsland(x, y) {
    mapArr[y][x] = '.';
    if(y > 0) {
      if (mapArr[y-1][x] === '0') {
        deleteIsland(x, y-1);
      }
    }
    if(y < mapArr.length-1) {
      if (mapArr[y+1][x] === '0') {
        deleteIsland(x, y+1);
      }
    }
    if(x > 0) {
      if (mapArr[y][x-1] === '0') {
        deleteIsland(x-1, y);
      }
    }
    if (x < mapArr[y].length) {
      if (mapArr[y][x+1] === '0') {
        deleteIsland(x+1, y);
      }
    }
  }
  for (var y = 0; y < mapArr.length; y++) {
    for (var x = 0; x < mapArr[y].length; x++) {
      if (mapArr[y][x] === '0') {
        islands++;
        deleteIsland(x, y);
      }
    }
  }
  return islands;
  }
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
