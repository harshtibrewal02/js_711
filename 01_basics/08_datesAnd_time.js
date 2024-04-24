// Dates : It is calculated in mili-seconds

let myDate = new Date()
// console.log(myDate); // o/o => 2024-04-24T10:29:14.439Z

// console.log(myDate.toString()); // Wed Apr 24 2024 10:30:48 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());  
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());   
// console.log(myDate.toUTCString()); 

// o/p :

// 4/24/2024
// 4/24/2024, 10:35:34 AM
// 2024-04-24T10:35:34.993Z
// 2024-04-24T10:35:34.993Z
// 10:35:34 AM
// Wed, 24 Apr 2024 10:35:34 GMT

// Months are starting from zero in JS .
// 0 => January ; 1 =>  February ; 2 => March

console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024,0,23)
let myCreatedDate = new Date("2024-03-24")
// console.log(myCreatedDate); // 2024-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Tue Jan 23 2024

// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1713956169006 it is in  mili-seconds
 console.log(myCreatedDate.getTime()); // 1711238400000
 console.log(myCreatedDate.getSeconds()); // 0

 console.log(Math.floor(Date.now()/1000)); // 1713956469 in seconds

 let newDate = new Date()
 console.log(newDate);

 console.log(newDate.toLocaleString('default',{
    weekday:"long"
 })); // Wednesday

 