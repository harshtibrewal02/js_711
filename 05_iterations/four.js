const coding = ["js", "py", "cpp", "java", "rb"]

// coding.forEach( function (value) {
//     console.log(value);
//     // js
//     // py
//     // cpp
//     // java
//     // rb
// })
// callback function has no  name.

// coding.forEach( (value) => {
//     console.log(value);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)
// // We are giving refrence here


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
