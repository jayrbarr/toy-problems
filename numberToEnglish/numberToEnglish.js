<<<<<<< HEAD
=======
/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

<<<<<<< HEAD
/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

Number.prototype.toEnglish = function () {
    let words = '';
    let powerOfTen = 0;
    let num = this + 0;
    if (!num) return numbersToWords[num];

    const threeDigitsMax = three => {
        if (!three) return '';
        let ones = three % 10;
        three = Math.floor(three / 10);
        let tens = three % 10;
        let hundreds = Math.floor(three / 10);
        let str = '';
        if (tens === 1) {
            str = numbersToWords[tens*10 + ones];
        } else {
            if (ones) {
                str = numbersToWords[ones];
                if (tens) {
                    str = numbersToWords[tens*10] + '-' + str;
                }
            } else if (tens) {
                str = numbersToWords[tens*10];
            }
        }
        if (hundreds) {
            str = str.length ? numbersToWords[hundreds] + ' ' + numbersToPlace[100] + ' ' + str : numbersToWords[hundreds] + ' ' + numbersToPlace[100];
        }
        return str;
    }

    while (num > 0) {
        let nextThree = num % 1000;
        num = Math.floor(num / 1000);
        words = powerOfTen && nextThree ? words.length ? numbersToPlace[10**powerOfTen] + ' ' + words : numbersToPlace[10**powerOfTen] : words;
        words = words.length ? threeDigitsMax(nextThree) + ' ' + words : threeDigitsMax(nextThree);
        powerOfTen += 3;
    }
  return words;
};
=======
Number.prototype.toEnglish = function () {
  // return my value as english words

  var number = this.valueOf();
  var place, numberInPlace, numberLeft; // eslint-disable-line
  var decimalPart;
  var output, restOfString, decimalString; // eslint-disable-line
  // separate decimal part for later
  if (number % 1 !== 0) {
    decimalPart = number % 1;
    number = Math.floor(number);
  }
  if (numbersToWords[number]) {
    // numbers less than 20 or divisible by 10 are unique(ish) and predefined
    output = numbersToWords[number];
  } else if (number < 100) {
    // numbers less than 100 are a multiple of 10 and a single digit, hyphenated
    numberInPlace = Math.floor(number / 10);
    numberLeft = number % 10;
    output = numbersToWords[numberInPlace * 10] + '-' + (numberLeft).toEnglish();
  } else {
    // all other numbers are a combination of a number we can write, and a place name
    if (number < 1000) {
      // the hundreds place is special
      place = 100;
    } else {
      // all other places are a multiple of 1000
      place = 1000;
      while (place * 1000 <= number) {
        place *= 1000;
      }
    }
    numberInPlace = Math.floor(number / place);
    numberLeft = number % place;
    // assemble this 1000s place
    output = numberInPlace.toEnglish() + ' ' + numbersToPlace[place];
    // assemble the rest of the number
    restOfString = (numberLeft).toEnglish();
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  // decimals are a combination of the base number, and a division by 10 place name
  if (decimalPart) {
    place = 1;
    do {
      place *= 10;
      decimalPart *= 10;
    } while (Math.floor(decimalPart) !== decimalPart);
    var pluralize = decimalPart === 1 ? '' : 's';
    // decimal place names are the same as number names, but hyphenated and ignoring "one"
    decimalString = decimalPart.toEnglish() + ' ' + place.toEnglish().replace('one ', '').replace(/ /, '-') + 'th' + pluralize;
    if (output === 'zero') {
      output = decimalString;
    } else {
      output += ' and ' + decimalString;
    }
  }
  return output;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
