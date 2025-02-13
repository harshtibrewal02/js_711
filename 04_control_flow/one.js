// if

// if (true){
//     // in this case, code will be executed.
// }

// if (false){
//     // in this case, code will not be executed.
// }

// <, >, <=, >=, ==, !=, ===

// = : is used for assigning value
// == : is used for checking whether  it is equal or not.
// === : strict checking, it checks equality as well as datatype.

const isloggedIn = true

// if(2 == "2"){
//     console.log("executed");
    
// }

if(2 === "2"){
    console.log("executed");
    
}

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
