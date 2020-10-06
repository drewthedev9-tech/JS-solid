// const numbersArray =[1,2,3,];
// for (let number of numbersArray)
//     console.log(number);


//     // forEach
// // numbersArray.forEach((number, index)=>{
// //     console.log(number, index)
// // })

// // Create a function that takes a number as an 
// // argument. Add up all the numbers from 1 to the
// // number you passed to the function. For example,
// //  if the input is 4 then your function 
// // should return 10 because 1 + 2 + 3 + 4 = 10.


// function addup(num){
//     let sum =0;
//     for(let i = 1; i <= num ; i++){
//        sum = sum + i;
//     }
//     return sum;
    
// }

// console.log(addup(4));

// // Given an array of numbers, return an array 
// // which contains all the even numbers in the
// //  orginal array, which also have even indices.

// numbersEven = [1,2,3,4,5];

// const ands = numbersEven.filter( number=>{
//     return number % 2 == 0;
// })

// console.log(ands);

// numbers =[12,34,2,4,];

// function getOnlyEvens(num){
//    return num.filter((number, indices)=>{
//        return number % 2 === 0 && indices %2 === 0;
// });
// }

// console.log(getOnlyEvens(numbers));


// Create a function that returns an array of strings sorted by length in ascending order.

const months = ['March', 'Jan', 'Feb', 'Dec'];

function sort(arr){
    return arr.sort((a, b)=>{
        return a.length - b.length;
    });
}

console.log(sort(months, null));

// Write a function that converts hours into seconds.

function convert(hours){
    retunr (hours * 60) * 60;
}