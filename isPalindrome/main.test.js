const { isPalindrome } = require('./main.js');

test('returns true for a palindrome', () => {
  const test = isPalindrome('aba4568/*&*^&^@&^');
  expect(test).toBe(true);
});
