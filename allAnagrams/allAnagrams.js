/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function(string) {
  let anagrams = {};
  const anagram = (gram, str) => {
    if (str === '') anagrams[gram] = true;
    for (let i = 0; i < str.length; i += 1) {
      anagram(gram + str[i], str.slice(0, i) + str.slice(i+1));
    }
  }
  anagram('', string);
  return Object.keys(anagrams);
};

// var anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = allAnagrams;
