/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

<<<<<<< HEAD
 const getPivot = (rotated, lowIndex, highIndex) => {
   if (highIndex === lowIndex) return lowIndex;
   if (highIndex < lowIndex) return null;
   let mid = Math.floor((highIndex+lowIndex)/2);
   if (rotated[mid] > rotated[mid +1]) return mid;
   if (rotated[mid] < rotated[mid - 1]) return mid-1;
   if (rotated[lowIndex] >= rotated[mid]) return getPivot(rotated, lowIndex, mid-1);
   return getPivot(rotated, mid+1, highIndex);
 }

 const binarySearch = (arr, low, high, target) => {
  let mid = Math.floor((high+low)/2);
  while(low !== high) {
    if (arr[mid] === target) return mid
    else if (arr[mid] < target) return binarySearch(arr, mid + 1, high, target)
    else return binarySearch(arr, low, mid-1, target);
  }
  return null;
 }

var rotatedArraySearch = function (rotated, target) {
  let pivot = getPivot(rotated, 0, rotated.length-1);
  if (pivot === null) return binarySearch(rotated, 0, rotated.length-1, target);
  if (rotated[pivot] === target) return pivot;
  if (rotated[0] <= target) return binarySearch(rotated, 0, pivot, target);
  return binarySearch(rotated, pivot+1, rotated.length-1, target);
};

// console.log(rotatedArraySearch([20, 21, 4, 5, 6, 7, 8, 9], 20));
=======
var rotatedArraySearch = function (rotated, target) {
  // Your code here:

  var left = 0;
  var right = rotated.length - 1;

  // Just a straight binary search.
  while (left <= right) {
    var middle = Math.floor((right + left) / 2);

    // We have found our target.
    if (rotated[middle] === target) { return middle; }

    // The clever part starts here:
    if (rotated[left] <= rotated[middle]) {
      // If the middle element is greater than the element to the left
      // of it, then that means that the bottom half is strictly increasing
      // from left to middle, i.e. it is sorted and we can just do a normal
      // binary search.

      // Is the target in this range?
      if (rotated[left] <= target && target < rotated[middle]) {
        // 'recurse' down this side
        right = middle - 1;
      } else {
        // 'recurse' down the other side
        left = middle + 1;
      }
    } else {
      // This means that the *top* half must be sorted, because
      // there can only be one place in the entire array where
      // the order is not sorted, and it's on the bottom half.

      if (rotated[middle] < target && target <= rotated[right]) {
        // 'recurse' down this side
        left = middle + 1;
      } else {
        // 'recurse' down the other side
        right = middle - 1;
      }

    }
  }

  // If we got here, that means that the target is not in the array, so:
  return null;
  };

>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
