/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

<<<<<<< HEAD

var largestProductOfThree = function(array) {
  array.sort((a, b) => b - a);
  let last = array.length - 1;
  let lastTwoAndFirstProduct = array[last] * array[last-1] * array[0];
  let firstThreeProduct = array[0] * array[1] * array[2];
  return (lastTwoAndFirstProduct > firstThreeProduct) ? lastTwoAndFirstProduct : firstThreeProduct;
};

// console.log(largestProductOfThree([-2, -3, -11, -7, -5, -13])) // === 42
=======
// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};

var largestProductOfThree = function(array) {

  // Make a copy of the input array and sort it numerically
  array = array.slice().sortAscending();

  var n = array.length;
  var lastProduct = array[n-1] * array[n-2] * array[n-3];
  var firstProduct = array[n-1] * array[0] * array[1];

  return Math.max(firstProduct, lastProduct);
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
