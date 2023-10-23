//selecting from
let form = document.querySelector("form");

let randomNo = Math.floor(Math.random(0, 10) * 10);
console.log(randomNo);
let userInput = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //getting value from form input
  let inputValue = parseInt(document.querySelector("#guessField").value);

  userInput.push(inputValue);
  console.log(userInput);

  if (userInput.length == 10) {
    randomNo = Math.floor(Math.random(0, 10) * 10);
    console.log(randomNo);
    userInput = [];
    console.log(userInput);
  }

  //indicating high or low
  let div = document.querySelector(".lowOrHi");
  div.innerHTML = "";

  //indicating high or low --error -- not displayed
  if (randomNo === inputValue) {
    div.innerHTML = "won !!";
  } else if (randomNo > inputValue) {
    div.innerHTML = "high";
  } else {
    div.innerHTML = "low";
  }

  //putting value in last guess
  let lastGuess = document.querySelector(".guesses");
  lastGuess.innerHTML = inputValue;

  //dec remaing chances -- error NaN
  let remaingChance = parseInt(document.querySelector(".lastResult").innerHTML);
  //reset on 0
  if (remaingChance === 0) {
    remaingChance = 10;
  }
  document.querySelector(" .lastResult").innerHTML = remaingChance - 1;
});
