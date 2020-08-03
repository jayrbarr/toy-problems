/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

<<<<<<< HEAD
const rockPaperScissors = (rounds, soFar) => {
  rounds = rounds || 3;
  soFar = soFar || [];
  const options = ['R', 'P', 'S'];
  let retArr = [];
  options.forEach((option) => (soFar.length !== 0) ? soFar.forEach((each) => retArr.push(each + option)) : retArr.push(option));
  return (rounds <= 1) ? retArr : rockPaperScissors(rounds - 1, retArr);
};
=======
var rockPaperScissors = function (rounds) {
  // TODO: your solution here

  var rounds = rounds || 3;
  var combos = [];

  var playRounds = function (playedSoFar) {
    playedSoFar = playedSoFar || '';
    
    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }
    
    ['R', 'P', 'S'].forEach(function(currentPlay) {
      playRounds(playedSoFar + currentPlay);
    });
  };

  playRounds();
  return combos;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

console.log(rockPaperScissors());
