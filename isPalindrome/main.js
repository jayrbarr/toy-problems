function isPalindrome(str) {
  // normalize str - lowercase, remove spaces, punctuation
  let regex = /[^A-Za-z]/g;
  let normal = str.toLowerCase().replace(regex, '');
  // split it into array by char, reverse, join
  let reverse = normal.split('').reverse().join('');
  // compare that to original string
  return normal === reverse;
  //return boolean
}

module.exports = { isPalindrome };
