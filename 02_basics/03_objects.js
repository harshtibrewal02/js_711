// singleton => object made using Constructor
// Object.create()

// object literals

const mySymbol = Symbol("key1") // Symbol is primitive dataType

const JsUser ={
    name:"Harsh",
    "fullName":"Harsh Tibrewal", // there is only the Better method to access it. 
    age:21,
    [mySymbol]: "key1", // now it is acting like a symbol
    location:"Chennai",
    email:"harsh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Sunday"]
}
// How to acess the object value :
// console.log(JsUser.email); // 1st method => harsh@google.com
// console.log(JsUser["email"]); // Better method => harsh@google.com

// console.log(JsUser["lastLoginDays"]); // ["Monday","Sunday"]
// console.log(JsUser.age); // 21

// console.log(JsUser[mySymbol]); // key1
// console.log(typeof mySymbol); // symbol

JsUser.email = "harsh@gmail.com"
// Object.freeze(JsUser) // Nowonwards, email can not be changed
// console.log(JsUser["email"]);

JsUser.email = "harsh@microsoft.com"
// console.log(JsUser["email"]);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

// console.log(JsUser.greeting); // [Function (anonymous)] => it is the Refrence of the Function. 

// console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.age}`);
}
console.log(JsUser.greeting2); // [Function (anonymous)]
console.log(JsUser.greeting2()); // Hello JS User, 21