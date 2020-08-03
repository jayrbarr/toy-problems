/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
<<<<<<< HEAD
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let repeats = false;
    for (let j = 0; j < string.length; j++) {
      if ( char === string[j] && i !== j ) {
        repeats = true;
      }
    }
    if (!repeats) { return char; }
  }
};

// firstNonRepeatedCharacter('AACBDB');
=======

  var mem = {};
  var c;
  for (var i = 0; i < string.length; i++) {
    c = string[i];
    if (!mem[c]) {
      mem[c] = 1;
    } else {
      mem[c]++;
    }
  }
  for (i = 0; i < string.length; i++) {
    c = string[i];
    if (mem[c] === 1) { return c; }
  }
  return null;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
