const marvel_heros = ["Iron Man","Thor","Spider Man"]
const dc_heros = ["Superman","flash","batman"]

// console.log(marvel_heros.push(dc_heros)); 
// output will be 4(length of array), because the array marvel_heros will include dc_heros as a single element.

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // ['Iron Man','Thor','Spider Man',[ 'Superman', 'flash', 'batman' ]]
// console.log(marvel_heros[3][0]); // Superman


// marvel_heros.concat(dc_heros)
// console.log(marvel_heros); => [ 'Iron Man', 'Thor', 'Spider Man']


// const arr1 = marvel_heros.concat(dc_heros) // [ 'Iron Man', 'Thor', 'Spider Man', 'Superman', 'flash', 'batman' ]
// console.log(arr1);


// const all_heros = [...marvel_heros,...dc_heros] // spread functin
// console.log(all_heros); // o/p => [ 'Iron Man', 'Thor', 'Spider Man', 'Superman', 'flash', 'batman' ]


const another_arr = [ 1 , 2, 3, [ 4, 5, 6], 7,[ 6, 7, [ 4, 5 ] ] ]

const real_arr = another_arr.flat(Infinity)
// console.log(real_arr); // o/p => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// console.log(Array.isArray("Harsh")); // false
// console.log(Array.from("Harsh")); // [ 'H', 'a', 'r', 's', 'h' ]

// console.log(Array.from({name:"Harsh"})); // intersting case , o/p => [],empty array


let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

