/**
 * prototype : mechanism of method inhertence
 * String.prototype, there is for array etc
 * Object.prototype -- this is parent of all
 * flow of prototype chaining : string etc  --> object --> null
 *
 * Note :
 * 1. we can add methods to it.
 * 2. we want methods that every one can access -- add that method to Object prototype
 * 3. want only for Arrays -- add method to Array prototype
 *
 * js working :
 * js looks for method in 1st prototye --> move to object --> in the null , thus every thing flows through obj prototype
 * Example shown below _______
 */

let user = "vasant";

// method added to Object prototype , is availabe to all str, fn etc
Object.prototype.greeting = function () {
  console.log("Hello , Welcome , Greetings !!");
};

//method only avaiable to String
Array.prototype.exclusive = function () {
  console.log("Array exclisve method ");
};

let arr = [1, 2, 3, 4];

console.log("* Method avaibale to all -- added in Object prototype: ");
user.greeting();
console.log("* Method avaibale to all array -- added in Array prototype: ");
arr.exclusive();

//task 1 -- create a method for all string that eliminates extra spaces & gives len

String.prototype.trueLength = function () {
  console.log(this.trim().length);
};
let str1 = "vasu    ";
let str2 = " chai aur code ";

console.log(`* true length of ${str1}`);
str1.trueLength();
console.log(`* true length of ${str2}`);
str2.trueLength();

// __proto__ mordern syntax

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

//old syntax
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
