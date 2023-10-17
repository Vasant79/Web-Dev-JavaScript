/**
 * function 3 types -- default , iffi -- immeditely invoked(avoids global polution), arrow
 * hoisting is possible in default fn -- meaning use first declare later
 */

// hoisting and default function
let result = defaultFunction();
console.log(result);

function defaultFunction() {
  return "It is default function";
}

// iffi -- syntax ()() -- in first () wirte fn 2nd () is for invoking and passing argument
(function iffi(name) {
  console.log(`Hi ${name} !! This is an iffi function`);
})("Vasant");

//arrow fn used as iffi
(() => {
  console.log("This is an arrow fn introduced in ES6");
})();

const arrowFn = () => {
  console.log("This is an arrow fn introduced in ES6");
};
arrowFn();
