let stringPrim = "string";
let numberPrim = 32;
let booleanPrim = true;
let undefinedPrim = undefined;
let nullPrim = null;
let symbol = Symbol;
let objectPrim = { a: "A string" };

let c = 2;

// const double = (x) => {
//   const c = 3
//   return x * c
// };

const func = function sumTwoPlusThree(a, b) {
  const c = 3;
  return a + b + c;
};

console.log("sum two and add three:", func(2, 3));
// console.log("double:", double(3))

const adder = (a) => (b) => a + b;

const addOne = adder(1, 2);

console.log("add one", addOne(5));

const multiply = (x) => (y) => x * y;

const double = multiply(2);

console.log("double", double(5));
