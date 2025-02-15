// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
  
//     console.log(element);
//     if (element == 5) {
//         console.log("5 is best number");
        
//     }
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`Inner loop value: ${j} and outer loop ${i}`);  
//        console.log(i + '*' + j + '=' + i*j);
       
        
//     }
// }

// let Myarray = ["harsh", "piyush", "dikshant"]
// for (let index = 0; index < Myarray.length; index++) {
//     const element = Myarray[index];
//     console.log(element);
    

// }

// Break and Continue

// for (let index = 1; index <=20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
    
//     console.log(`Value of i is ${index}`);
    
    
// }

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
        // it will leave only one time, means it will skip the condition of 5
    }
    
    console.log(`Value of i is ${index}`);
    
    
}