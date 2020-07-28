const numbers =[3,4];

// end of array - push
numbers.push(5.6);
console.log(numbers)//[3,4,5,6]

// beggining



// middle  inex, delete numbers, adding numbers
numbers.splice(2, 0, 'a', 'b')

// finding elements (primitives)
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
const course = courses.find(function(course){
    course.name === 'a';
})
//  findindex finds the index
const course = courses.findIndex(function(course){
     return course.name === 'a';
})

console.log(course)

// arrow functions//////
const course = courses.find(course=>{
    return course.name === 'a';
})

// removing elements///////
const numbers2 = [1,2,3,4];
// End
const last = numbers.pop();
// beginning
const first = numbers.shift();
// middle
// index, no.of elements
numbers.splice(2,1);
// emptying an array ////

// solution1 
numbers = [];


