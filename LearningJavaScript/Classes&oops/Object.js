/**
 * Object we create normally in js is -- object literal
 * object is collection of methods & properties
 * object literal -- this in obj reffers to current context -- that is obj
 *  this is not very successful in arrow function
 */

let user = {
  name: "vasant",
  age: 24,

  welcome: function () {
    console.log(`Welcome ${this.name}`);
  },
};

user.welcome();

//detailed object examination -- object prop discriptor -- propertyHasOwnDiscriptor
const discriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(discriptor);
//if we want to change the ssetting in object -- properties discriptor -- use define property
Object.defineProperty(user, "name", {
  writable: false, // now no one can change the property name
});

user.name = "vasu";

console.log(user);
