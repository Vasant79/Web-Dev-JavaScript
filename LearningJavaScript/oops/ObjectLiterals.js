/**
 * Object we create normally in js is -- object literal
 * object is collection of methods & properties
 */

//object literal -- this in obj reffers to current context -- that is obj
// this is not very successful in arrow function
let user = {
  name: "vasant",
  age: 24,

  welcome: function () {
    console.log(`Welcome ${this.name}`);
  },
};

console.log(user.welcome());
