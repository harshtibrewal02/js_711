// This the Definition of the Function :
function SayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
// SayMyName => this is refrence of the function

// SayMyName() // Execution of the function , or calling the function !

// A function for adding two numbers,

// function add2Numbers(number1,number2){ // Parameters (used in the definition of the function )=> (number1,number2)
//     console.log(number1 + number2);
// }

// add2Numbers(3,4)  // Arguments( used in calling the function ) => (3,4)

// add2Numbers(3,"4") // 34, because JS will treat both as a string.
// add2Numbers(3,"a") // 3a,same reason.
// add2Numbers(3,null) // 3

// const result = add2Numbers(3,4) // 7.beacause the function is called
// console.log("Result : ",result); // Result : undefined

function add2Numbers(number1,number2){ // Parameters (used in the definition of the function )=> (number1,number2)
    // let result = number1 + number2
    // console.log("Harsh");    
    // return result
    // console.log("Harsh"); // It will never print, because after return nothing can be printed

    return number1+number2 // when we return, wecan store the in any value outside the scope.
    // if we use console.log(), we can not store it,outside the scope!
}

const result = add2Numbers(3,4) 
console.log("Result : ",result); // Result : 7


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("HARSH")); // HARSH just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("HARSH")); // HARSH just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in


// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("HARSH")); // HARSH just logged in
// console.log(loginUserMessage("")); // Please enter a username   undefined
// console.log(loginUserMessage()); // Please enter a username   undefined



function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("HARSH")); // HARSH just logged in
console.log(loginUserMessage("")); // Please enter a username   undefined
console.log(loginUserMessage()); // Sam just logged in
