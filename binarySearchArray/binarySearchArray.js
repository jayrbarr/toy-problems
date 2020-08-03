/*
 * to test, run from root directory:
 * mocha binarySearchArray
 *
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, start = 0, end = array.length) {
  if (end === start) return null;
  let compare = start + Math.floor((end - start) / 2);
  if (target === array[compare]) return compare;
  if (target < array[compare]) {
    return binarySearch(array, target, start, compare);
  } else {
    return binarySearch(array, target, compare + 1, end);
  }
};

// var index = binarySearch([1, 2, 3, 4, 5], 2);
// console.log(index); // 3
// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null


// var binarySearch = function (array, target) {

//   var sub = function (low, high) {
//     // If we are done, we haven't found the target.
//     if (high === low) { return null; }

//     // Find the middle point.
//     var mid = Math.floor((high - low) / 2) + low;

//     // See if we found the target.
//     if (array[mid] === target) {
//       return mid;

//     // Second check to see if we haven't found the target.
//     } else if (low === high - 1) {
//       return null;

//     // If not, decide which half to recurse on.
//     } else if (array[mid] > target) {
//       return sub(low, mid);
//     } else {
//       return sub(mid, high);
//     }
//   };

//   // Do the recursion.
//   return sub(0, array.length);
//   };

module.exports = binarySearch;
