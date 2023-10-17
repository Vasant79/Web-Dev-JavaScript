/**
 * Filter -- returns specific ele if condition is true;
 * note -- filter( takes fn here) only ture conditon are returned
 */

const nums = [1, 2, 3, 4, 5, 6, 7];

let filteredResult = nums.filter((num) => {
  return num > 4;
});

console.log(`Filtered result ${filteredResult}`);
