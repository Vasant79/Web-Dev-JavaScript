//getting div in which time to be displayed
let div = document.querySelector("#clock");

/*
getting local time
let date = new Date();
console.log(date.toLocaleTimeString());


upgarde continously upadte time --  using setInterval

*/

//setInterval -- when we want something to happen continously -- parameter fn & time
setInterval(function () {
  let date = new Date();
  let localTime = date.toLocaleTimeString();
  div.innerHTML = localTime;
}, 1000);
