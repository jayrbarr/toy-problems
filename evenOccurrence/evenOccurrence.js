/*
 * Find the first item that occurs an even number of times in an array.
<<<<<<< HEAD
 * Remember to handle multiple even-occurrence items and return the first one.
=======
 * Remember to handle multiple even-occurrence items and return the first one. 
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
<<<<<<< HEAD
  var obj = {};
  var count = 0;
  arr.forEach((each) => {
    if (obj[each]) {
      obj[each][1] = !obj[each][1];
    } else {
      obj[each] = [ count, false ];
      count++;
    }
  });
  var value = [ null, Infinity ];
  for (let key in obj) {
    if (obj[key][1] === true) {
      if (obj[key][0] < value[1]) value = [ key, obj[key][0] ]    }
  }
  return (isNaN(Number(value[0])) || value[0] === null) ? value[0] : Number(value[0]);
};
=======

  var hash = {};
  var i;
  // hash of not-even characters
  for (i = 0; i < arr.length; i++) {
    hash[arr[i]] = !hash[arr[i]];
  }
  // return the first even occurrence
  for (i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) { return arr[i]; }
  }
  return null;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
