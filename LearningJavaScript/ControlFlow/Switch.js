/**
 * Switch -- use when many case to compare
 * null avoiding operator  ??
 */

let temp = 80;

switch (temp) {
  // note in switch you cannot use expression 50<temp etc
  case 80:
    console.log(`temp greater than 50`);
    break;

  case 100:
    console.log(`temp greater than 100`);
    break;

  default:
    break;
}

//null avoiding operator
let value = null;
let result = value ?? 90; //?? takes 90 and avoids only null value
console.log(result);
