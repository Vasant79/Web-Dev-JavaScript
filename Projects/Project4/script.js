//grab start & stop
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

document.body.backgroundColor = "white";

//fn for changing color
function changeColor() {
  let colorRange1 = Math.floor(Math.random() * 256);
  let colorRange2 = Math.floor(Math.random() * 256);
  let colorRange3 = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${colorRange1},${colorRange2}, ${colorRange3})`;
}

//add event listner on both start -- stop clearInterval()

let colors;

start.addEventListener("click", (event) => {
  //setInterval
  colors = setInterval(changeColor, 2000);
  console.log("color change started");
});

stop.addEventListener("click", (event) => {
  //clearInterval
  clearInterval(colors);
  console.log("color change ended");
});
