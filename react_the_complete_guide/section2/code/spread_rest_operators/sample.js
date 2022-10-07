const numbers = [1,2,3];
const newSpreadNumbers = [...numbers, 4];

console.log(newSpreadNumbers);

const newNotSpreadNumbers = [numbers, 4];
console.log(newNotSpreadNumbers);


// [1, 2, 3, 4]
// [[1, 2, 3], 4]

const person = {
  name: 'Pablo'
}

const newPerson = {
  ...person,
  age: 28
};

console.log(newPerson);

// [object Object] {
//   age: 28,
//   name: "Pablo"
// }

const filter = (...args) => {
  // === type and value equality
  // arrow function for built-in filter
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3))

