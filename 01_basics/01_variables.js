const accountId=1234 // values can not be changed
let accountEmail="gkpking568@gmail.com"  // let and var are keywords , and their values can be changed
var accountPassword="12345"
accountCity="Gorakhpur" // var can be declared like this also , but should not use it .
let accountState ;
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail="harsh@hc.com"
accountPassword="4567"
accountCity="Bangalore"

console.log(accountId); // to print 


console.table([accountEmail,accountPassword,accountCity,accountState]) // shortcut for printing all variables 
