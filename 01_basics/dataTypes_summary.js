// Primitive

// 7 types: String ,Number ,Boolean , null (niether empty nor 0 ; means it is completely empty ) , Undefined , Symbol , BigInt
 const score = 100
 const scoreValue = 100.01

 const isLoggedIn = true 
 const outsideTemp = null
 let userEmail;
 const id=Symbol('123')
 const anotherId = Symbol('1234')
 console.log(id == anotherId);

 const BigInt = 2548949431549n


/// Refrence (or Non-primitive dataType )  => result will be in Object dataType

// Array, Objects, Functions 

const heros = ["shaktiman","krrish","shinchan"];
let myObj = {
    name:"Harsh",
    age:22,
}

const myfunction = function(){
    console.log("HELLO WORLD");
}

// console.log(typeof dataType name ); => it finds the dataType.

// JavaScript is multiple-paradigm (a set of ideas), dynamic language with types and operators, standard built-in objects, and methods.