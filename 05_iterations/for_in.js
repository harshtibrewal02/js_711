// for in loop is used in objects

const myObject = {
    js : "javascript",
    rb : "ruby",
    cpp : "c++",
    swift : "swift by apple"
}

// for (const key in myObject) {
//    console.log(key);
// // js
// // rb
// // cpp
// // swift
// }

// for (const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]}`);
//     // js is shortcut for javascript
//     // rb is shortcut for ruby
//     // cpp is shortcut for c++
//     // swift is shortcut for swift by apple
// }

const programming = ["js", "py", "cpp", "java", "rb"]

for (const key in programming) {
    console.log(key);
    // 0
    // 1
    // 2
    // 3
    // 4    
}

for (const key in programming) {
    console.log(programming[key]);
    // js
    // py
    // cpp
    // java
    // rb
    
}