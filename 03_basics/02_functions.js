// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,500,600)); // 200


// function calculateCartPrice(...num1){ // ... => rest or spread operator(it is used to add multiple values in a function)
//     return num1
// }
// // Now we can get infinite arguements in the CalculateCartPrice(arguments), they will get printed
// console.log(calculateCartPrice(200,500,600,5000)); // [ 200, 500, 600 ]


function calculateCartPrice(val1,val2,...num1){
     return num1
}
// console.log(calculateCartPrice(200,500,600,5000)); // [ 600,5000], here 200 amd 500 are stored in val1 and val2.

const user= {
    username:"Harsh",
    price:199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // Username is Harsh and price is 199

// We can create another object also
handleObject({
    username:"Sam",
    price:399
})                    // Username is Sam and price is 399

const myNewArry = [1,2,3,4,5,6]

function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArry)); // 2

console.log(returnSecondValue([7,8,9,10])); // 8