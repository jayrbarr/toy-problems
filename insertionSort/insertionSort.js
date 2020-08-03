/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
<<<<<<< HEAD


// Iterate through array starting at index 1
// Compare the chosen element to the objects before it.
// If it's smaller than compared object, insert it ahead of that object. // If comparator return negative, then insert before.
// If larger, check the next object up until the chosen element's current position.
// Continue the iteration through the whole array.
// When you reach end of array, the array is sorted. Will also keep the sort stable.













var testingTransform = function(array) {
  var transform = [];

=======
var testingTransform = function(array) {
  var transform = [];
  
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

<<<<<<< HEAD

var insertIntoArr = function(obj, idx, array, comparator = (a, b) => (a.value < b.value) ? -1 : (a.value > b.value) ? 1 : 0) {

  let pushedObj = false;
  for (let i=0; i<idx; i++) {
    if (comparator(obj, array[i]) < 0 && !pushedObj) {
      array.splice(idx, 1);
      array.splice(i, 0, obj);
      pushedObj = true;
    }
  }
  return array;
}

var insertionSort = function(array, comparator) {
  // Your code goes here. Feel free to add helper functions if needed.
  for (let x=1; x < array.length; x++) {
    insertIntoArr(array[x], x, array, comparator);
  }
  return array;
};

var array = testingTransform([1, 2, 3, 4, 5]);
console.log(insertionSort(array, function (a, b) {
  return b.i - a.i;
}));

var test = testingTransform([3, 2, 1, 5, 1, 5]);

console.log(insertionSort(test));
=======
var insertionSort = function(array/*[, comparator]*/) {
  // Your code goes here. Feel free to add helper functions if needed.


  for (var i = 1; i < array.length; i++) {
    var val = array[i];
    var hole = i;

    while (hole > 0 && val.value < array[hole - 1].value) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    array[hole] = val;
  }

  /* EXTRA CREDIT:
  if (!comparator) { // neglect error checking for brevity
    comparator = function(a, b) {
      // We only need to know if a is _less than_ b
      return a.value < b.value ? -1 : 0;
    };
  }
  
  for (var i = 1; i < array.length; i++) {
    var val = array[i];
    var hole = i;

    while ((hole > 0 && comparator(val, array[hole - 1])) < 0) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    array[hole] = val;
  }

   */
    return array;
};
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
