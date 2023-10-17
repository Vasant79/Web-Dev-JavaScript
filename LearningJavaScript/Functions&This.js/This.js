/**
 * this -- keyword tells the current context
 * imp -- works good with obj
 */

// global -- this in node -- {} , global this on web -- window
console.log(this);

// this & obj
let obj = {
  name: "Vasant",
  age: "25",
  // arrow fn does not have its own this context
  greeting: function () {
    console.log(`Welcome !! ${this.name}`);
  },
};

obj.greeting();
