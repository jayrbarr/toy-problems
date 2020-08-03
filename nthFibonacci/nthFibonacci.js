/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

// var nthFibonacci = function (n) {
//   return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
// };

const nthFibonacci = n => {
  let arrayFibs = [0, 1];
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      arrayFibs.push(arrayFibs[i - 1] + arrayFibs[i - 2]);
    }
  }
  return arrayFibs[n];
}

// console.log(nthFibonacci(30));

// var nthFibonacci = function (n) {
//   // TODO: implement me!

//   // fast solution
//   var fibs = [0, 1];
//   for (; n > 1; n--) {
//     fibs.push(fibs.shift() + fibs[0]);
//   }
//   // n will be 1 after finishing the loop, but return fibs[n] for 0 case as well.
//   return fibs[n];
// };



// solow, recusrive (exponential time complexity) solution
// uncomment to make sure the tests fail for this case
// var nthFibonacci = function(n) {
//   // Your code here
//   return n < 2 ? n : nthFibonacci(n-1) + nthFibonacci(n-2);
// };

// WHOLE SERIES FUNCTION
// var fibonacci_series = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

module.exports = nthFibonacci;
