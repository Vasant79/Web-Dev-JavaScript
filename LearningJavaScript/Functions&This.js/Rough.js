function greet(name) {
  console.log(`Welcome ${name}`);
}

//greet("Vasant");

//fn returning fn -- whole lexical scope is passed
let welcome = function (name, n) {
  return function () {
    console.log(`Greeting ${name} ${n++}`);
  };
};

const Greeting = welcome("Vasu", 1);
// Greeting();
// Greeting();
// Greeting();
// Greeting();
