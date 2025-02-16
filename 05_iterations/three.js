// for of loop used in arrays

// Array specific loop

// ["", "", ""]
// [{}, {}, {}]

// const array = [1, 2, 3, 4, 5]

// for (const num of array) {
//     console.log(num);
    
// }

// const greetings = ["hellow JavaScript !"]

// for (const greet of greetings) {
//     console.log(greet);   // hellow JavaScript !
    
// }


// Maps : Known for unique key-value pairs

const map = new Map()

map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")

// console.log(map.get('IN'));  // India
// console.log(map.get('Fr'));
// console.log(map.get('USA'));

// console.log(map);
// Output:  Map(3) {
//     'IN' => 'India',
//     'Fr' => 'France',
//     'USA' => 'United States of America'
//   }

for (const [key,value] of map) {
    console.log(key, ':- ', value);
    // o/p:
    // IN :-  India
    // Fr :-  France
    // USA :-  United States of America
}

