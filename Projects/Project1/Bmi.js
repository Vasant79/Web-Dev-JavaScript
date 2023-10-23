//grab form
let form = document.querySelector("form");
console.log(form);

//during submit check if h & w okay if okay calc bmi
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //grabbing height & weight
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#results");

  if (isNaN(height) || height == " ") {
    result.innerHTML = "<span>Enter valid info</span>";
  }
  if (isNaN(weight) || weight == " ") {
    result.innerHTML = "<span>Enter valid weight</span>";
  }

  let bmi = weight / ((height * height) / 10000);

  result.innerHTML = `BMI ${bmi.toFixed(2)}`;

  //br
  result.appendChild(document.createElement("br"));

  if (bmi < 18.6) {
    //creating text node
    let info = document.createTextNode(`You are underweight`);
    result.appendChild(info);
  } else if (bmi > 18.6 && bmi < 24.9) {
    let info = document.createTextNode(`You are with in normal`);
    result.appendChild(info);
  } else {
    //over weight
    let info = document.createTextNode(`You are over weight`);
    result.appendChild(info);
  }
});
