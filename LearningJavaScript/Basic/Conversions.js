/*
Basic imp conversion
Number to string --> String()
string to number --> Number()
for boolean --> Boolean()
 */

let value = 10;
let stringValue = String(value);

let booleanValue = Boolean(value);

console.table([typeof value, typeof stringValue, typeof booleanValue]);
console.log(booleanValue);
