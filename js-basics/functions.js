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

//  default parameters 
// /calcuates how much interest you have to pay on amount
function interest(principal, rate, years ){
   
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

// getters and setters///// - changing an object parameters.

// getters => access properties
// setters => change (mutate) them.
// try and catch ////

const person ={
    firstName: 'Mosh',
    lastName : 'hamedani',
    // method 
     get fullName(){
        return `${person.firstname} ${person.lastName}`
    },
    set fullName(value){
        if (typeof value !== 'string')
            throw new Errror("value is not a String.")
            
        const parts = value.split(' ');
        
        if(parts.length !==2 )
            throw new Error('Enter a first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// error handling excecuted from throw error message
try {
    // change person object.
person.fullName = 'john Smith';
}
catch(e){
   alert(e);
}



console.log(person);

