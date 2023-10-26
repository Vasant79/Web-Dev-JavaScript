/**
 * Map -- is similar to for each but return values
 * it takes handler/arrow fn -- moves on to each element and do thing that is asked
 */

const nums = [4, 5, 6, 71, 2];

let mappedResult = nums.map((item) => {
  return item + 1;
});

console.log(`Mapped Result ${mappedResult}`);
