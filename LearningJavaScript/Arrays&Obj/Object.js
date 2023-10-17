/*
Object -- 
declaration 2 types -- literals 
let obje={ key : value}
let obj= new Object(); //singleton

object can have any value arr , obj , string , number , boolean etc
generally api -- [ {}, {},{},{} ]
 */

let obj1 = {
  name: "Vasant",
  fullName: "Vasant Singh Negi",
};

let obj2 = {
  role: "Software Engineer",
};

//accessing 2 types obj.name or obj[name] -- 2nd used when symbole / "name"
console.log(obj1.name);
console.log(obj1["fullName"]);

//adding new property & fn
obj1.occupation = "Engineer";

obj1.greeting = () => {
  console.log("Hello Js User");
};
obj1.greeting();

//adding 2 obj --> using spread operator
console.log(" ----- Added 2 objects : ");
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// object destructuring -- using specific key values from obj -- { }
console.log("---------- object Destructuring : ");
const { fullName, occupation } = obj3;
console.log(fullName + " --> " + occupation);
