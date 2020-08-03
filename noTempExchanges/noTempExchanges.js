/* Write a function that 
 * reassigns twp global integer variables (a, b)
 * to each other without using another variable.
 */

 let a = 5;
 let b = 10;


function exchangeIntNoTemp() {
  a = a + b;
  b = a - b;
  a = a - b;
  return `a = ${a}, b = ${b}`;
}

/* Write a function that 
 * reassigns twp global string variables (c, d)
 * to each other without using another variable.
 */

 let c = 'cat';
 let d = 'dog';

function exchangeStringNoTemp() {
  c = c + d;
  d = c.slice(0, c.length - d.length);
  c = c.slice(d.length);
  return `c = "${c}" and d = "${d}"`;
}

console.log(exchangeIntNoTemp());
console.log(exchangeStringNoTemp());
