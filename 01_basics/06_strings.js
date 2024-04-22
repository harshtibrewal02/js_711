const name = "Harsh"
const repoCount = 50

// console.log( name + repoCount + " value"); => it is outdated .

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} .`);
// // it is not an apostrophee symbol , it is (` `) followed by ${} 
// // it is a modern way of represntation .

const gameName = new String('harsh_hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // __proto__ => is used for making object.{it is empty}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); // to find at this index which variable is there.
// console.log(gameName.indexOf('h')); // to find this variable is at which index.

// const newString = gameName.substring(0,4) // last value which is 4,is not included.
// console.log(newString); // o/p => hars

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


// const newString1 = "   harsh  "
// console.log(newString1);
// console.log(newString1.trim()); // it includes both start and end , terminates only whitespaces !

const url = "https://jitesh.com%20choudary"
console.log(url.replace('%20','-'))

console.log(url.includes('jitesh'))

console.log(gameName.split('-'));
