// array => zero-indexing

const myArray = [1,2,3,4,5,0]
// console.log(myArray[0]);

const heros = ["Salman Khan","Akshay Kumar","Imran Hashmi"]

const myArr2 = new Array(1,2,4,9,8)
// console.log(myArr2[3]);

// Array Methods
// myArr2.push(6)
// console.log(myArr2); // o/p => [1,2,4,9,8,6], now my Arr2 has been changed

// myArr2.pop() // it will eliminate the last element.
// console.log(myArr2);

// myArr2.unshift(10)
// console.log(myArr2);  // o/p => [ 10, 1, 2, 4, 9, 8 ]

// myArr2.shift() // it will remove the unshift value
// console.log(myArr2) // [ 1, 2, 4, 9, 8 ]

// console.log(myArr2.includes(6));
// console.log(myArr2.indexOf(6));

// const newArr = myArr2.join()
// console.log(newArr); // values will be same , but there will be a change in type.
// // o/p => 1,2,4,9,8
// console.log(typeof newArr); // string


// Slice , Splice

console.log("A ",myArr2); // A  [ 1, 2, 4, 9, 8 ]

const myn1 = myArr2.slice(1,3)
console.log(myn1); // [ 2, 4 ]
console.log("B ",myArr2); // B  [ 1, 2, 4, 9, 8 ]

const myn2 = myArr2.splice(1,3)
console.log("C ",myArr2); // C  [ 1, 8 ]
console.log(myn2); // [ 2, 4, 9 ]