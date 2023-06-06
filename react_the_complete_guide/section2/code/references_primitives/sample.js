const number = 1;
const num2 = number; // a real copy

// numbers, booleans, strings are always copied value

// objects, arrays are reference types
const person = {
  name: "Pablo"
};

// actually makes a pointer
const secondPerson = person;
console.log(secondPerson);

person.name = "Manual";

console.log(secondPerson);

// [object Object] {
//   name: "Pablo"
// }
// [object Object] {
//   name: "Manual"
// }

// concept is important in ReactJS
// must be copied in immutable way, copying object
// via spread operator!

const thirdPerson = {
  ...person
};

person.name = "NotSeen"

console.log(thirdPerson)

// [object Object] {
//   name: "Pablo"
// }
// [object Object] {
//   name: "Manual"
// }
// [object Object] {
//   name: "Manual"
// }