// // function Declaration
// function walk(){
//     console.log("walk");
// }

//  annonymous Function expression.
// invlves declaring avariable and setting it to a 
// function.
let run = function(){
    console.log("run")
};

run();


//  hoisting - 
//  can call function before function declaration.
// only with function declarartions not function expressions.
// javascript engine will move declrations before call.
walk()
 function walk(){
         console.log("walk");
 }

//  Arguments 
// function sum(a,b){
//     return a + b;
// }
// sum(1,2); // will only do the arguments in function out put = 3 

// the rest operator ///// ...args is the rest operator inside the parameter of 
// a function will take all of the arguments in the sum function call 
// below.
// function sum(...args){
//     // reduce takes all values and puts them into a single.
//  return args.reduce((a,b) => a + b)
// }


// builiding on code above
// cannot have a parameter after the rest parameter.
function sum(discount,...prices){
    // reduce takes all values and puts them into a single.

 const total =  prices.reduce((a,b) => a + b)
// final price aftr discount.
 return total * (1 - discount);
}

// shopping cart has 10percent discount and two items 
// 20 an 30 dollars.
console.log(sum(0.1, 20, 30));