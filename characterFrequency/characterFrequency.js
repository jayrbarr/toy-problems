/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
<<<<<<< HEAD
  const letters = string.toLowerCase().split('');
  const count = {};
  for (let letter of letters) {
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  let frequency = [];
  for (letter in count) {
    frequency.push([letter, count[letter]]);
  }
  let sort = frequency.length > 1 ? true : false;
  while (sort) {
    sort = false;
    for (let i=0; i<frequency.length-1; i++) {
      if (frequency[i][1] < frequency[i+1][1]) {
        let temp = frequency[i].slice(0);
        frequency[i] = frequency[i+1].slice(0);
        frequency[i+1] = temp.slice(0);
        sort = true;
      } else if ((frequency[i][1] === frequency[i+1][1]) && (frequency[i][0] > frequency[i+1][0])) {
        let temp = frequency[i].slice(0);
        frequency[i] = frequency[i+1].slice(0);
        frequency[i+1] = temp.slice(0);
        sort = true;
      }
    }
  }
  return frequency;
};

console.log(characterFrequency('mississippi'));
=======

  var letter;
  var letters;
  var result = [];
  var frequencies = {};
  var i;

  // letter frequencies
  for (i = 0; i < string.length; i++) {
    letter = string.substr(i, 1);
    if (!frequencies[letter]) { frequencies[letter] = 0; }
    frequencies[letter]++;
  }

  letters = Object.keys(frequencies);

  for (i = 0; i < letters.length; i++) {
    result.push([letters[i], frequencies[letters[i]]]);
  }
  result.sort(function(a, b) {
    if (a[1] > b[1]) { return -1; }
    if (a[1] < b[1]) { return 1; }
    if (a[0] < b[0]) { return -1; }
    if (a[0] > b[0]) { return 1; }
    return 0;
  });
    return result;
};
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
