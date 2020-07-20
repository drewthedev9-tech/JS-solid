// dot notation
// make a object access different parts and cosnole out.
// make a function that displays a specific part of an object


const numbers1 = [1,2,3]
const person ={
    name: "bob",
    job: "software"
}



function displayIndex(){
   return person.name
    
}

console.log(displayIndex());

// eqaulity

let x = 10;
//strict equality operator
// same type and value
 console.log( x=== 10) // true

 //losse equlatiy only checks value. in this case 10
 console.log( "10"=== 10) // true 

//  if a customer has more than 100 points.
// they are a gold customer ? silver customer.

let points = 110;
let type = points > 100 ? "gold" : silver;
console.log(type); // gold.

// logical operators ////
// logical AND &&
// conole.log(true && true )// true
// let hghIncome =false;
// let creditScore = true;

// let eligbleForLoan = hghIncome && creditScore;
// console.log(eligbleForLoan); // false

// OR ||

// let eligbleForLoan = hghIncome || creditScore;
// console.log(eligbleForLoan); // true

// ! NOT 
// let applicationRefused = eligbleForLoan;
// console.log(eligbleForLoan);//true.

// logical operators with NOn-booleans
// falsy = undefined, null, 0, false, '', Nan( not a number)

// anything that is not falsy -> truthy = as long as onof the operands is true it will
// be truthy
false || "mosh" // mosh
false || 1 || 2  // 1 once  engine finds a truthy it stops = short circuiting.

// example application
let userColor = "red";
let defaultColor = "blue";
// if user picks color will be red otherwise defaults to blue.
// exaple if userColor was "undefined" it would default to blue.
let currentColor = userColor || defaultColor;

console.log(currentColor);

// control flow
// hour 6am and 12pm - morning
// 12pm and 6pm - afternnon
// otherwise - good evening.
let hour = 10;

if (hour >= 6 && hour < 12){
    console.log("good morning")
} else if( hour >= 12 && hour < 18 ){
    cosnole.log("good afternoon")
} else {
    console.log("good evening")
}

// switch and case - compare the variable against others, number booleans etc.
let role = "guest";
switch (role){
   case  'guest':
   console.log('guest User')
   break;

   case'moderator':
   console.log("moderator user")
   break// needs break other statements will be used otherwise.

   default: 
   console.log("unknown user");
   break
}

// for loops ///////
// index, condition, incrementg expression.
 const numbers = [1,2,3,4,5];

for( let i = 0; i < numbers.length; i ++){
    // not an even number
//    if (i % 2!== 0){
//        console.log(i); // 1, 3 ,5.
//    }
console.log(numbers[i]);

// 
}

//  do -while 
let i =0;
do{
    if ( i % 2 !== 0) console.log(i);
    i++
} while (i = 1 <=5);









