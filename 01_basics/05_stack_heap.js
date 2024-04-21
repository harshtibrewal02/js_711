// Stack Memory : It is used with Primitive dataTypes .
// In this if a variable is declared , we get a copy of that variable in the memory.

let myYoutubeName = "jaishrishyam02"

let anotherName = myYoutubeName
anotherName = "harsh means happiness :) "
console.log(myYoutubeName);
console.log(anotherName);



// Heap Memory : It is used with Non-Primitive dataTypes .
// When a memory is declared in a heap ,or an object ,or an variable ; we get a REFRENCE of the orignal value .

let userOne = {
    email: "ht0691@google.com",
    upi: "user@ybl"
}

let user2 = userOne  // here refrence of the orignal value is changed with the help of new variable .

user2.email  = "ak1@google.com"

console.log(userOne.email);
console.log(user2.email);