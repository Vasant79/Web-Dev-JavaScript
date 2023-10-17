/* number is premitive type
js auto detect it as no.
 explicitly tells that it is number -- type obj note when new used it is obj
*/
let value = 100;
let newValue = new Number(400);

console.log(value + " " + typeof value);
console.log(newValue + " " + typeof newValue);

/*
 ------------------- Math ----------------

Math obj -- used for mathematical purpose 
commom methods -- round, precise, randome, floor, ceil,max-min, pow
 */

let no1 = 2;
let no2 = 3;
let deciNo = 10.678;

console.log(Math.max(no1, no2));
console.log(Math.pow(no1, no2));
console.log(Math.round(deciNo));

//generating random -- between 0-1
console.log(Math.random());
console.log(Math.random() * 10 + 1);
//avoiding decimal random value
console.log(Math.floor(Math.random() * 10) + 1);

//generating value between constraint 10 & 20
let max = 20;
let min = 10;

console.log(Math.floor(Math.random() * 10 + min));
