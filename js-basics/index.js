// dot notation
// make a object access different parts and cosnole out.
// make a function that displays a specific part of an object


const numbers = [1,2,3]
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
conole.log(true && true )// true
let hghIncome =false;
let creditScore = true;

let eligbleForLoan = hghIncome && creditScore;
console.log(eligbleForLoan); // false

// OR ||

let eligbleForLoan = hghIncome || creditScore;
console.log(eligbleForLoan); // true

// ! NOT 
let applicationRefused = eligbleForLoan;
console.log(eligbleForLoan);//true.

// logical operators with NOn-booleans
// falsy = undefined, null, 0, false, '', Nan( not a number)

// anything that is not falsy -> truthy = as long as onof the operands is true it will
// be truthy
false || "mosh" // mosh
false || 1 || 2  // 1 once  engine finds a truthy it stops = short circuiting.







