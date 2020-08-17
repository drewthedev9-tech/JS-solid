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
// final price after discount.
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
    // change person object from here.
person.fullName = 'john Smith';
}
catch(e){
   alert(e);
}



console.log(person);

//  global  vs local scope ////////
// determoes where a variable is accesible.
// avoid using too many global variables.

// global scoped.
// const color = red;

// private scoped.
function start(){
// message only accessible in this block.
const message = "hi";
console.log(message);
for (let i =0; i <=5 ; i++){
    console.log(i)


}
// cannot do here not inside scope block above. 
// console.log(i)

}

start();

// Let vs Var /////// 
// var is not limited by the block in which it is described.
function start1(){
    for (var i =0;i < 5 ; i++){
        // console.log(i);
        // becauseof var color is accesible anywhere in the function.
        if(true){
            var color = 'red';
        }
         
    }
    console.log(color);
}

// var as global///
// var also attatches the variable to the window object
// so if you type in the console window,color output = red;
// this can be bad if you hav a third party library that attatches and overides stuff
// avoid var.
// var color1  = red;
// let age = 30;

// var creayes function scoped variables.
// ES6 (2015) let , const -> block scoped 

start1();

// the this key word /////////////

// method -> obj
// function references -> global (window, global).

const video ={
    title: 'a',
    play(){
        console.log(this);
    }
};

// adding a mthod to object 
video.stop = function(){
    console.log(this); // references video object.
}

function playVideo(){
    console.log(this) // reference window object.
}

video.play(); // video obj.

// const video1 ={
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log( this.title, tag);
//         }, this)
//     }
// }

// video1.showTags();

// changing this /////////

// dont use this approach.
// const video1 ={
//         title: 'a',
//         tags: ['a','b','c'],
//         showTags(){
//             // this referencing this object.
//             const self = this; 
//             this.tags.forEach(function(tag){
//                 console.log( self.title, tag);
//             })
//         }
//     }


// usig bind to attach this to the function not the call back function.
// const video1 ={
//         title: 'a',
//         tags: ['a','b','c'],
//         showTags(){
//             // this function would point towards the
//             // window oject without binding it
//             this.tags.forEach(function(tag){
//                 console.log( this.title, tag);
//             }.bind(this));
//         }
//     }

// Arrow functions inherit the this keyword
// when dealing with call back function in a object
// use arrow functions
const video1 ={
            title: 'a',
            tags: ['a','b','c'],
            showTags(){
            //    => inherits "this" keyword from "this.tags and carrie it into the
            //  =>function"
                this.tags.forEach((tag)=>{
                    console.log( this.title, tag);
                });
            }
        }

    
 video1.showTags();
  
    // function playVideo(){
    //     console.log(this);
    // }

    // // call refers to this and can be changed
    // playVideo.call({ name: 'Mosh'})
    // // apply does same thing but has to be passed as an array.
    // playVideo.apply({ name: 'Andrew'})
    // // retunrs a new function with tyis pointing to the name: andrew property.
    // const fn = playVideo.bind({ name: 'Bob'});
    // fn();
    


    // exc - creat a fucntion that takes numbers and create their
    // sum
    // even be able to sum up the numbrs in an array.
   
  function sum(...args){

    if(args.length === 1 && Array.isArray(items[0]))
    return args.reduce((a,b)=> a+b);
  }

  console.log(sum([1,2,3,4]));

  // numbers moving excercise
const numbersMoving =[1,2,3,4];

function move(array, index, offset){
        const position = index + offset;
        if (position >= array.length){
            console.error('Invalid offset');  
            return; 
        }

        const output = [...array];
     const element = ouput.splice(index, 1)[0];
      output.splice(position + offset,0,element);
      return output;

}

const outPut = move(numbersMoving, 0, 3);

console.log(output);
