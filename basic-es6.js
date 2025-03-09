// 1. let & const (Block Scoped Variables)
let x = 10; // Can be reassigned
x = 30;
console.log(x);

const y = 20; // Cannot be reassigned
// y = 30;
console.log(y);

// 2. Arrow Functions
const add = (a, b) => a + b;
console.log(add(10, 20));

// 3. Template Literals (String Interpolation)
const name = "Barik";
console.log(`Hello ${name}`);

// 4. Destructuring Assignment
const person = {
  pname: "barik",
  age: 28,
};
const { pname, age } = person;
console.log(pname, age);

// 5. Spread & Rest Operator (...)
const nums = [1, 3, 4, 5, 6];
console.log(nums);
console.log(...nums); //Spread

const sum = (...args) => args.reduce((a, b) => a + b, 0); //Rest
console.log(sum(1, 3, 5, 2, 5));

// 6. Default Parameters
const persen1 = (name = "Barik") => console.log(`hello ${name}`);
persen1();

function min(nums) {
  return Math.min(nums);
}
console.log(min(1, 3, 2));

if (10 === "10") {
}
