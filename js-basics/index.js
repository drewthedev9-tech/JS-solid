// // dot notation
// // make a object access different parts and cosnole out.
// // make a function that displays a specific part of an object


// const numbers1 = [1,2,3]
// const person ={
//     name: "bob",
//     job: "software"
// }



// function displayIndex(){
//    return person.name
    
// }

// console.log(displayIndex());

// // eqaulity

// let x = 10;
// //strict equality operator
// // same type and value
//  console.log( x=== 10) // true

//  //losse equlatiy only checks value. in this case 10
//  console.log( "10"=== 10) // true 

// //  if a customer has more than 100 points.
// // they are a gold customer ? silver customer.

// let points = 110;
// let type = points > 100 ? "gold" : silver;
// console.log(type); // gold.

// // logical operators ////
// // logical AND &&
// // conole.log(true && true )// true
// // let hghIncome =false;
// // let creditScore = true;

// // let eligbleForLoan = hghIncome && creditScore;
// // console.log(eligbleForLoan); // false

// // OR ||

// // let eligbleForLoan = hghIncome || creditScore;
// // console.log(eligbleForLoan); // true

// // ! NOT 
// // let applicationRefused = eligbleForLoan;
// // console.log(eligbleForLoan);//true.

// // logical operators with NOn-booleans
// // falsy = undefined, null, 0, false, '', Nan( not a number)

// // anything that is not falsy -> truthy = as long as onof the operands is true it will
// // be truthy
// false || "mosh" // mosh
// false || 1 || 2  // 1 once  engine finds a truthy it stops = short circuiting.

// // example application
// let userColor = "red";
// let defaultColor = "blue";
// // if user picks color will be red otherwise defaults to blue.
// // exaple if userColor was "undefined" it would default to blue.
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

// // control flow
// // hour 6am and 12pm - morning
// // 12pm and 6pm - afternnon
// // otherwise - good evening.
// let hour = 10;

// if (hour >= 6 && hour < 12){
//     console.log("good morning")
// } else if( hour >= 12 && hour < 18 ){
//     cosnole.log("good afternoon")
// } else {
//     console.log("good evening")
// }

// // switch and case - compare the variable against others, number booleans etc.
// let role = "guest";
// switch (role){
//    case  'guest':
//    console.log('guest User')
//    break;

//    case'moderator':
//    console.log("moderator user")
//    break// needs break other statements will be used otherwise.

//    default: 
//    console.log("unknown user");
//    break
// }

// // for loops ///////
// // index, condition, incrementg expression.
//  const numbers = [1,2,3,4,5];

// for( let i = 0; i < numbers.length; i ++){
//     // not an even number
// //    if (i % 2!== 0){
// //        console.log(i); // 1, 3 ,5.
// //    }
// console.log(numbers[i]);
// if (i % 2!== 0){
//     console.log(i);
// }

// // while loop.

// let i= 0;
// while ( i<=5){

// }

// //  do -while 
// let i =0;
// do{
//     if ( i % 2 !== 0) console.log(i);
//     i++
// } while (i <=5 );
// // for in///// used to iterate over the properties of an object.

// const person = {
//     name: mosh,
//     age: 30
// };

// for (let key in person )
// console.log(key, person[key]);

// for of loop - iterate over indexes of  arrays. ES6
const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);

// break and continue/////
let i =0;

while( i <= 10){
    // if (i === 5)
    if (i % 2 === 0){ 
        i++;
        continue;
    }
    break;
    console.log(i);
    i++;
}

// have two umbers and take return the max.
const max = (a,b)=>{
    if (a >b)
    return a ;
    // ...
    return b ;
}
// ternianry operator way super tidy code.
// return (a > b )? a : b ;

console.log(330,600);

function isLandscape(width, height){
    // need toexplicitly return return true and false here.
    retrun(width > height);
}

// fizz buzz excercise 
// divisible by 3 => fizz.
// divisisble by 5 => buzz
// divisible by 3 and 5 => fizz buzz
// not divisnle by 3 or 5 => input 
// Not a booolean => 'not a number'

// typeOf has specidic retunr values = "number", boolean", " string" etc. look at MDN
const fizzBuzz =(input)=>{
    if (typeof input !== 'number')
        return NaN
    if ((input % 3 === 0) && (input % 5 === 0))
        return "fizzBuzz";
     if ( input % 3 === 0)
        return "fizz";
     if (input % 5 === 0)
        return "buzz";
   
     else 
     return input;
}

const output = fizzBuzz(15);
console.log(output);










