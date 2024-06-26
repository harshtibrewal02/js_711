const score = 400

const balance = new Number(100)
// console.log(balance); // o/p => [Number : 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3

// console.log(balance.toFixed(2));  // 100.00

const otherNumber = 123.4567

// console.log(otherNumber.toPrecision(4)); // 123.5
// console.log(otherNumber.toPrecision(3)); // 123

const hundreds = 1000000

// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // Indian : 10,00,000

// +++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math); // o/p => Object [Math] {}

// console.log(Math.abs(-4)); // minus value are changing into + value. => 4

// console.log(Math.round(4.6));
// console.log(Math.round(4.55));
// console.log(Math.ceil(4.54));
// console.log(Math.floor(4.2));

// console.log(Math.min(4,3,1,9,0,5));
// console.log(Math.max(4,3,1,9,0,5));

console.log(Math.random()); // this will always give values between 0 and 1 .

console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // very important 