function add(a, b) {
  return a + b;
}

// TypeScript version
// function add(a:number, b:number) {
//   return a + b;
// }


//const result = add(2, 5);
// nothing to warn you that you should be using strings!
const result = add('2', '5');


console.log(result);