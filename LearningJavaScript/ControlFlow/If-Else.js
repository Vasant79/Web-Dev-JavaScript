/**
 * control flow -- controlling how the code will execute on meeting some condition
 * avaiable -- if - else, switch , ternery , null ?? operator
 */

//if else

let temp = 50;

if (temp >= 50) {
  console.log(`${temp} C  greater than 50`);
} else {
  console.log("temp lower than 50");
}

//ternery -- short hand of if else
temp > 100
  ? console.log(`temp greater than 100`)
  : console.log(`temp lower than 100`);
