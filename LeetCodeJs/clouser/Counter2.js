//task -- fn that return obj with 3 methods
let createCounter = function (init) {
  //storing for reset -- mistake was not storing directly modifying orginal
  let count = init;

  let obj = {
    increment: function () {
      console.log(++count);
    },
    decrement: function () {
      console.log(--count);
    },
    reset: function () {
      count = init;
      console.log(count);
    },
  };
  return obj;
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
