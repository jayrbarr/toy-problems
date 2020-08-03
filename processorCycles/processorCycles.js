/*  PROCESSOR CYCLES

A computer processor handles tasks in a round-robin sort of style.
It will spend a maximum amount of time on one task before rotating to the next one.
It will handle the tasks in the order they are received. A new task will be placed
in the queue after all the currently-processing tasks.

Calculate the average wait time for N number of tasks that each have a specified time entry
point and a specified number of required cycles for completion.

For instance for 3 tasks that arrive at times 0, 1, and 4 and each task requires 5, 2, and 3
processor cycles respectively. What is the average wait time for all tasks if the processor
spends a maximum of 3 cycles on each tasks before moving to the next one.

Input arrives at the function in a string with each line representing the following:
Line 1: one integer representing a number of tasks, N
Line 2: space-separated row of integers representing time arrivals for each tasks, in chronological order
Line 3: space-separated row of integers representing amount of time that each task takes, in corresponding order to line 2
Line 4: amount of time processor will spend on a task before rotating to the next one in the queue.

For example, for input string:
`3
0 1 4
5 2 3
3`

The expected output (average wait time for the tasks) would be a floating-point
number rounded to no more than 2 decimal places delivered as a string:
`2.33` = the expected output for the above test input string.

For an input string of:
`5
0 2 3 7 12
4 6 1 4 1
3`

The expected output would be:
'4.40'

*/

function processorCycles(input) {
  let [numStr, entryStr, reqStr, cycStr] = input.split('\n');
  let numTasks = parseInt(numStr, 10);
  let entries = entryStr.split(' ');
  let reqTime = reqStr.split(' ');
  let cycles = parseInt(cycStr, 10);
  let totalWait = 0;
  let task = 0;
  let queue = [];
  let time = 0;
  let temp;
  while (queue.length || task < numTasks) {
    while (entries[task] <= time) {
      queue.push([parseInt(entries[task], 10), parseInt(reqTime[task], 10)]);
      task++;
    }
    if (temp) {
      queue.push(temp);
      temp = undefined;
    }
    if (queue.length) {
      if (queue[0][0] <= time) {
        totalWait += time - queue[0][0];
        if (queue[0][1] <= cycles) {
          time += queue[0][1];
          queue.shift();
        } else {
          time += cycles;
          queue[0][0] += cycles;
          queue[0][1] -= cycles;
          temp = queue.shift();
        }
      }
    } else {
      time += cycles;
    }
  }
  return (totalWait / numTasks).toFixed(2).toString();
}

let test = `3
0 1 4
5 2 3
3`;

let test2 = `5
0 2 3 7 12
4 6 1 4 1
3`

console.log(processorCycles(test));
console.log(processorCycles(test2));

