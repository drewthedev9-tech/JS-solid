const numbers =[3,4];

// end of array - push
numbers.push(5.6);
console.log(numbers)//[3,4,5,6]

// beggining



// middle  index, delete numbers, adding numbers
numbers.splice(2, 0, 'a', 'b')

// finding elements (primitives) indexof.
// const numbers1 =[1,2,3,1,4];

// numbers.indexOf(1)// 0 , 1 is at 0 index.
// numbers.lastIndexOf(1); // 3 
// numbers.indexOf(1) !== -1 // means index is there.
// // modern way in javascript.
// numbers.includes(1); // true.

// fincding elements (reference types)

const courses =[
    { id: 1, name: 'a', },
    { id: 2, name: 'b', }
];

// find has a call back function
// const course = courses.find(function(course){
//     course.name === 'a';
// })
//  findindex finds the index
// const course = courses.findIndex(function(course){
//      return course.name === 'a';
// })

// console.log(course)

// arrow functions//////
const course = courses.find(course=>{
    return course.name === 'a';
})

// removing elements///////
const numbers2 = [1,2,3,4];
// End
// const last = numbers.pop();
// // beginning
// const first = numbers.shift();
// middle
// index, no.of elements
numbers.splice(2,1);
// emptying an array ////

// solution1 - good if you have single eference to array.
// let numbers =[1,2,3,4,];
// let another = numbers;

// numbers = [];

console.log(numbers)
// solution 2 - probably best solution.
numbers.length = 0;

// solution splice method. go to given position

numbers.splice(0, numbers.length);

// solution 4 - runs a loop that keep popping the numbers array.
// while (numbers.length > 0)
// numbers.pop();

// console.log(numbers);
// console.log(another);

// combining and slicing arrays.//////
// object when sliced will copy the reference not make new object.
const first = [{id: 1}];  

const second = [4,5,6];

// solution1
// const combined =first.cocncat(second);
// console.log(combined);
// slicing an array.
// start after indexx 2 finsih after index 4
// const slice = combined.slice(2,4);
// slice from 2.
// const slice = combined.slice(2);
// slice ll of it make new array - keep in mind primives liek numbers
// are copied but not objects justa refernce to the original is.
// const slice = combined.slice();


// console.log(slice);

// the spread operator////// - combine arrays.
// spread operator returns them exactly as displayed.
// const combined =[...first, 'a',...second, 'b'];
// const copy = [...combined];
// console.log(copy);

// iterating an array...//////

const numbersArray =[1,2,3,];
for (let number of numbersArray)
    console.log(number);
// forEach

numbersArray.forEach((number, index)=>{
    console.log(number, index)
})

// joining arrays
// one of theparameters of join is a seperator
//here we use the ',' as it returns a string.
const joined = numbersArray.join(',' );

const message = "This is my first message";
const parts = message.split(' ');// puts into an array
console.log(parts);

const combined = parts.join('-');
console.log(combined);

// sorting arrays
// sorting arrays
const numbersSort = [2,3,1];

// coverts to inline sort.
numbersSort.sort();
console.log(numbersSort);
// revers array;
numbersSort.reverse();
console.log(numbersSort);

// sorting object arrays.

const coursesNew = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javaScript'}
];

courses.sort(function(a,b){
    // a < b => q
    // a> b =>1
    // a === b =>0 
    // kconverting to upper case allows for a equa; 
    // Ascii comparison pf strings so gets equal comaprision.
const nameA = a.name.toLowerCase();
const nameB = b.name.toLowerCase();

    if  (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(coursesNew);

//  testing elements of an array.
// every
// every() matches the given criteria

// const numbersElements = [1,-1,2,3];

// const allPositive = numbers.every(function (value){
//     return value >= 0;
// })

// some - testig elements in an array.
// checks to see if at least one of the criteria is true.
const atLeastOnePositive = numbers.some(function (value){
    return value >= 0;
})

// filtering an array.

// const numbersElements = [1,-1,2,3];

// chaining using multiple methods
//function that filters everything above 0.
// const items = numbersElements.filter(function(value){
//     return value >=0;
// }).map(n => {
//     return obj = ({value: n });
   
// });

// console.log(filtered)

// mapping an array - returns a new array.

// const items = filtered.map(n => {
//     return obj = ({value: n });
   
// });

// console.log(items); ///ac

// reducing an array - reduce all elemnts in a single array into a  single value.

const numbersElements = [1,-1,2,3];

// algortihmn for clalculating all the sums in the array.

// let sum = 0;

// for(let n of numbersElements)
// sum = sum + n;


// reduce has two arguments the call back function and the 0 being the 
// intial value of the accumauator.
const sum = numbersElements.reduce( (accumuator, currentValue)=>{
     return accumuator + currentValue;
    //  if you dont supplly an initial value for the acc , the first 
    // index of the array will be used.
},0);

console.log(sum);

// exc. array that does the range from number to number.


 const rangeCounter =(min,max)=>{
     const output = [];
     for (let i =min; i <= max; i++)
    //  pushing the looped numbers onto out array.
     output.push(i);
     return output;
 }
 

 const numbersRange = rangeCounter(1,10);
 console.log(numbersRange);


// make a function that works liek includes
// includes checks to see if it has a citeria:
// check to see if there is a a one.
console.log(numbers.includes(1));

numbersIncludes = [1,2,3,4,5]

 function includes(array, searchElement){
     //loop
     for(let element of array)
     if (element === searchElement)
     return true;
     return false;
 }

 console.log()
