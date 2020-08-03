/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
<<<<<<< HEAD
  let final = 0;
  while ( number > 9 ) {
    let lastDigit = number % 10;
    let remainder = Math.floor(number / 10);
    final += lastDigit;
    final *= 10;
    number = remainder;
  }
  return final + number;
}

console.log(reverseInteger(54321));
=======
  // TODO: Implement this function!

  let result = 0;
  let place  = 10;

  while(number) {
    result *= 10;
    result += (number % place) / (place / 10); 
    number -= number % place;
    place  *= 10; 
  }

  return result;
  }
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
