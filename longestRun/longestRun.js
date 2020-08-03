/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
<<<<<<< HEAD
  let runs = string.length ? [[0,0]]: [];
  let last = string.length ? string[0] : '';
  let run = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === last) {
      if (typeof runs[run] === 'undefined') {
        runs[run] = [i-run , i];        
      }
      run++;
    } else {
      run = 1;
      last = string[i];
    }
  }
  const best = runs.length - 1;
  return runs[best];
};
=======

  if (!string) { return null; }

  var currentCount = 1;
  var topCount = 0;
  var currentStart = 0;
  var topStart = 0;
  var topEnd = 0;
  var topRun = string[0];

  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      currentCount++;
      if (currentCount > topCount) {
        topCount = currentCount;
        topStart = currentStart;
        topEnd = i;
      }
    } else {
      currentCount = 1;
      currentStart = i;
    }
  }

  return [topStart, topEnd];
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
<<<<<<< HEAD

// for (let x = 0; x < 10; x++) {
//   const testString = randomString(3000);
//   console.log(testString + ': ' + longestRun(testString));
// }
=======
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
