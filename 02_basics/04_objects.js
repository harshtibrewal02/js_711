// const tinderUser = new Object()  // singleton object , as object created by a Constructor
const tinderUser = {} // Non-singleton Object
// console.log(tinderUser);

tinderUser.id = "zx"
tinderUser.name = "Harsh"
tinderUser.age = 21
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"harsh@google.com",
    fullName:{
        UserFullName:{
            firstName:"Harsh1",
            lastName:"Tibrewal"
        }
    }
}

// console.log(regularUser.fullName.UserFullName.firstName);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a", 4:"b"}
// console.log(obj1);

// const obj3 = Object.assign(obj1,obj2) // in this all the values are going in obj1.

// const returntarget = Object.assign(target, source);

// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({},obj1,obj2) // in this all the values are going in {}.

const obj3 = {...obj1,...obj2}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id:1,
        gmail:"harsh02@google.com"
    },
    {
        id:1,
        gmail:"harsh02@google.com"
    },
    {
        id:1,
        gmail:"harsh02@google.com"
    }

]
console.log(users[2].gmail);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // data type is Array, [ 'id', 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'zx', 'Harsh', 21, false ]


console.log(Object.entries(tinderUser));
// [
//   [ 'id', 'zx' ],
//   [ 'name', 'Harsh' ],
//   [ 'age', 21 ],
//   [ 'isLoggedIn', false ]
// ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true