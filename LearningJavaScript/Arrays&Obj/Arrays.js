/*

Array -- data structure to store data
asscessing -- using index arr[0];
js -- array is dynamic
imp methods -- push, pop, slice & splice unshift, shift, 
spread operator [...arr1,...arr2]
Array.isArray(), Array.from(inputs), Arrays.of(multiple ip)
*/

let array1 = [1, 2, 3, 4, 5];

console.log("1. Push Pop : ");
array1.push(7);
console.log(`Array after push 7 : ${array1}`);
array1.pop();
console.log(`Array after pop : ${array1}`);

// * slice and splice -- slice take out chunk from arr w/o changing original ,
let sliceArr = array1.slice(0, 2); // does nnot include 2
console.log("2. Slice Splice operation : ");
console.log(sliceArr);

console.log(array1.splice(0, 3)); //splice takes out chunck from arr & change original.

// * combining 2 arr -- use spread operator
console.log("3. Combine array using spread operator : ");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [9, 8, 7, 6];

let result = [...arr1, ...arr2];
console.log(result);

// * checking Array.isArray(), Array.of(), Array.from()
console.log("3. Using Array.isArray(), Array.of(), Array.from() : ");
let str = "Vasant";

console.log(` Check if str : ${Array.isArray(str)}`);

//converting to arr with single/ multiple inputs
console.log(Array.from(str)); //converts str to arr
console.log(Array.of(str, "Singh", "Negi")); // multiple inputs to arr ele
