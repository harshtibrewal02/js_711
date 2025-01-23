const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);

    // Here, this refers to the current context.
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// Arrow Function

// Explicit Return

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// Here, return is mandatory in {}
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()



// Implicit return ,here no use of return in ()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()