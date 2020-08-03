/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

<<<<<<< HEAD

var quicksort = function(array) {
  // define recursive base case
  if (array.length < 2) return array;
  // choose pivot
  let pivot = array[0];
  let less = [];
  let greater = [];
  // split into two arrays - higher or lower than pivot
  for (let i=1; i<array.length; i++) {
    if (array[i] < pivot) less.push(array[i]);
    else greater.push(array[i]);
  }
  // recursively sort the two arrays
  // combine two sorted arrays and pivot into one sorted array
  let smaller = quicksort(less);
  smaller.push(pivot);

  // return sorted array
  return smaller.concat(quicksort(greater));
};
=======
var concat = function () {
  return [].concat.apply([], arguments);
};

var quicksort = function(array) {

  if (array.length <= 1) { return array; }

  var pivot = array[0];

  var left = array.slice(1).filter(function (x) {
    return x < pivot;
  });

  var right = array.slice(1).filter(function (x) {
    return x >= pivot;
  });

  return concat(quicksort(left), [pivot], quicksort(right));
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
