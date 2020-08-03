/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
<<<<<<< HEAD
  let sign = number >= 0 ? 1 : -1;
  number = Math.abs(number);
  let decimal = number % 1;
  let whole = Math.floor(number);
  let powerOfTen = 0;
  let decimalToPowerOfTen = decimal;
  while (decimalToPowerOfTen % 1) {
    powerOfTen++;
    decimalToPowerOfTen = decimal * (10 ** powerOfTen);
  }
  let numerator = 10 ** powerOfTen;
  while (decimal !== 0 && (numerator / decimalToPowerOfTen) % 1 !== 0) numerator += 10 ** powerOfTen;
  let denominator = decimal ? numerator / decimalToPowerOfTen : 1;
  numerator = decimal ? (numerator / (10 ** powerOfTen)) + (whole * denominator) : whole * denominator ;
  numerator *= sign;
  return `${numerator}/${denominator}`;
};


console.log(toFraction(0.88));
console.log(toFraction(0.253213));
console.log(toFraction(-1.75));
console.log(toFraction(1.875));

=======
  // Your code here

  var reduce = function(numerator, denominator) {
    var lowNum = Math.min(numerator, denominator);
    for (var i = lowNum; i > 0; i--) {
      if ( i > numerator || i > denominator) {
        return [numerator, denominator];
      }
      if ( numerator % i === 0 && denominator % i === 0 ) {
        numerator /= i;
        denominator /= i;
      }
    }
    return [numerator, denominator];
  };

  var isNegative = number < 0;
  var string = number.toString();
  var split = string.split('.');
  if (isNegative) { number = number * -1; }
  var denominator;
  if (split[1]) {
    denominator = Math.pow(10, split[1].length);
  } else {
    denominator = 1;
  }
  var numerator = Math.round(number * denominator);
  return (isNegative ? '-' : '') + reduce(numerator, denominator).join('/');
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
