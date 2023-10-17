/**
 * Reducer -- generally for cal sum
 * takes in (acc, value)
 */

const nums = [1, 2, 3, 4, 5, 6, 7];

let reducerResult = nums.reduce((acc, num) => {
  return acc + num;
}, 0);
//0 here is starting value(acc) that we provide

console.log(`Reducer result ${reducerResult}`);
