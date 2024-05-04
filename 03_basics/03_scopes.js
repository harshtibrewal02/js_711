// {} => scope

// let c =3000

let a = 300

if(true){
    let a =10
    const b =20
    console.log("BLOCK SCOPE : ",a); // BLOCK SCOPE :  10


   // c = 30 // this is why we should not use var 

} // it is block scope , it can not be used oitside 

console.log(a); // 300 // GLOBAL SCOPE


// console.log(b); // 20

// console.log(c); // 30