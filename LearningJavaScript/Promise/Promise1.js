/**
 * Promise -- a code that will eventually be done
 * 3 states -- completed , pending , rejected
 * Promise created & consumed
 * methods -- 2 -- fetch.then( takes fn ).cath( takes fn )
 * .then().then() /can have chaining, return value in 1st then is gievn to second
 *
 * async await m -- add try catch as it does not handel error
 */

//using .then.catch()
//creating promise -- takes fn with parameter resolve & reject
const promise = new Promise((resolve, reject) => {
  //code
  setTimeout(() => {
    console.log("promise 1");
    resolve(); //passes/provide connection with .then for consumption
  }, 1000);
});

//consuming promise
promise
  .then(function (output) {
    console.log("promise consumed");
  })
  .catch(function (error) {
    console.log(error);
  });

//working with fetch -- fetch(url).then().catch() -- fetch call is handeled in priority queue
//note -- fetch was bundled with recent releases 18 -- before version causes error

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Names : " + data.results[0].name.first);
  })
  .catch((error) => {
    console.log(error);
  });

//using async and await -- async -- function , await -- piece of code that takes time
async function randomUserApi() {
  //code
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    let data = await response.json(); // if no await -- promise pending
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

randomUserApi();
