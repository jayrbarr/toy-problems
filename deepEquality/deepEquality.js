/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
<<<<<<< HEAD
 var deepEquals = function(apple, orange, equals=true) {
  // return JSON.stringify(apple) === JSON.stringify(orange);
  for (let key in apple) {
    if (orange.hasOwnProperty(key)) {
      if (apple[key] !== orange[key] && typeof apple[key] !== 'object') return false;
      if (typeof apple[key] === 'object') {
        equals = equals && deepEquals(apple[key], orange[key], equals);
      } delete orange[key];
    } else return false;
  }
  return (Object.keys(orange).length === 0) ? equals : false;
};

// console.log (deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
// console.log (deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
// console.log (deepEquals({ foo: 'bar', biz: 'baz' },{ foo: 'bar' })); // false
// console.log (deepEquals({ foo: 'bar' }, { foo: 'bar', biz: 'baz' })); // false
=======
var deepEquals = function(apple, orange) {

  if (apple === orange) { return true; }
  if (apple && !orange || !apple && orange) { return false; }
  if (!(apple instanceof Object) || !(orange instanceof Object)) { return false; }
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) { return false; }
  if (appleKeys.length === 0) { return true; } // two empty objects are equal
  for (var i = 0; i < appleKeys.length; i++) {
    if (!orange.hasOwnProperty(appleKeys[i])) { return false; }
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) { return false; }
  }
  return true;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
