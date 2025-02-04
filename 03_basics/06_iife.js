// Immediately Invoked Function Expression (IIFE)

// Due to problem faced by , pollution of global scope ,
// To remove the pollution of global scope variables, we use iife.

// function chai(){
//     console.log(` Data Base Connected`);
    
// }
// chai()   // Data Base Connected

// named iife
(function chai(){
    console.log(` Data Base Connected`);
    
})();     // Data Base Connected
// first () , is for function declaration
// last () , is for execution call

// To end iife , put ()(); : Use Semicolon to end iife . 

// ( () => {
//     console.log(`DB Connected Two`);
    
// })() // DB Connected Two

// unnamed iife
( (name) => {
    console.log(`DB Connected Two ${name}`);
    
})('harsh') // harsh

// Remember the point:
// while writing 2 iife: end the first iife with ";".
// then only u are able to run 2nd iife.