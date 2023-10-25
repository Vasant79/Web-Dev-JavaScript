class User {
  //constructor
  constructor(userName, userAge) {
    this.userName = userName;
    this.userAge = userAge;
  }

  //methods
  fullName() {
    console.log("Name : " + this.userName);
  }
}

//creating obj and testing
const user1 = new User("vasu", 25);
const user2 = new User("Vasant", 24);

user1.fullName();
user2.fullName();

//behind the scenes -- before classes es6 -- we used function and prototype inhertence
function Person(userName, userAge) {
  this.userName = userName;
  this.userAge = userAge;
}

Person.prototype.fullName1 = function () {
  console.log(
    "this is implemented using techniques before es6 : " + this.userName
  );
};

const People = new Person("Tyson", 32);
People.fullName1();
