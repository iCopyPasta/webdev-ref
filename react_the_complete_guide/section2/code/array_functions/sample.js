const numbers = [1,2,3]

// function executed on each element
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

// map returns a new real array
console.log(numbers);
console.log(doubleNumArray);

// [1, 2, 3]
// [2, 4, 6]
