// objects - purpose is to group reltaed variables
// OOP object oriented stye in object below.
// OOP => a colletion of objects thta talk to eachother for functinality.


// dot notation
// circle.draw();
// factory functions - produce objects.
// code is in one place so if theres  ug we can just fix
// it in one place.

function createCircle(radius){
  return{
        radius, //radius: radius
        draw(){
            console.log('draw')
            }
    };
  
}

// an instance from the onject above.
const circle1 = createCircle(1);
console.log(circle1);
// another instance from the circle above.
const circle2 = createCircle(2);
console.log(circle2);

// constructor functions////// - constructe and object
// PAscal notation - capital letter on first word.

function Cirlce(radius){
    // this pointing to an ampty object adding the functions radius.
   this.radius = radius;
   this.darw = function(){
       console.log("draw");
   }
//    this.return - this happening under the hood.
}

// when you use "new".
// nw creates a empty object -> x ={}
// points this in above function to th object below object.
// retunrs object fromt he cnstructor function.
const circle = new Cirlce(1);

// cant change object variable but you can change object properties.

// constructor property
// every object has a property called contsutor, and taht constructor references 
// that function that was used to creat that object.

// functions are objects.

//  enumerating properties of an object.///////
// for in for objects
// for of for arrays - BUT using objec.keys or object.entries.

const circleObj ={
    radius: 1, 
    draw(){
        console.log('draw');
    }
};

// interating over an object - for in is for objects
// for in loops are for iterating over arrays.
for (let key in circleObj){
    // bracket notationn to get the value of the property.
    console.log(key, circleObj[key]);
}

// way to iterate over object with for of using object.keys.
// for (let key of Object.keys(circleObj))
//     console.log(key);

// way to iterate over object with for 
//  using object.entries.
// for (let entry of Object.entries(circleObj))
// console.log(entry);

// cloning and object////////
// usig circleObj above.

// const circleObj ={
//     radius: 1, 
//     draw(){
//         console.log('draw');
//     }
// };


// OLD way of cloning objects
// for(let key in circleObj)
//     another[key] = circleObj[Key];
    // puts circleObj['radius] into anther['radius];
    // another['radius'] = circleObj['radius'];

// modern javascript way of cloning an object Object.assign
// can cmbine properties of an object or add.
// {}= empty object , then is filled circleObj
// but it doesnt have to be you an overide with specific properties.
// const another = Object.assign({
//     color: 'yellow'
// }, circleObj);

// spread operator way of cloning an object///
const another = {...circleObj};

// garbage colletor - deallocates the memory of variables that arent being used.

// built in objects and functions.
// Math - dealing with mathematcial calculations - look at MDN

// String primitive.
// const message ='This is my first message';

// // string object
// const another = new String('hi');

// template literals ES6
// const  another = `This is my
// 'first' message, Hi ${John} im ${2 +3}`;//5

// DATE - built in object
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9); // 0 based january is o so may i 4 instead of 5

now.setFullYear(2017);

//Excercise - address object ////////
// street 
// city
// zip code
// showAddress

const address ={
    street: "bloomeberg",
    city: "daytona",
    zipcode : "31345"
}

const showAdress=(address)=>{
 for ( let key in address){
    console.log(key, address[key]);
 }
}

// console.log(showAddress(address));
//  excercise function factory and constructor functions.
// from address function
// and a constructor function

// function crateAdress(stret, city, zipcode){
//     return{
//         street: stret,
//         city: city,
//         zipcode : zipcode

//     } ; 
// }

// const adress1 = crateAdress(a,b, c);
// console.log(address1);
// constructor function
function CreateAdress(street, city, zipcode){
    {
       this.street = street;
       this.city = city;
       this.zipcode = zipcode;

    } ; 
}

const newAdresss = new CreateAdress('a','b','c');


// console.log(newAddress);

// excercise Object equality
// check to see if two objects are the same

function areEqual(newAdress, newAdress2){
     return newAdress.street === newAdress2.street &&
     newAdress1.city === newAdress2.city &&
     newAdress1.zipcode === newAdress2.zipcode

}

function areSame(newAdress, newAdress2){
    // strict comparison
    return newAdress === newAdress2
}

// blog posts excercise - make a object with the folllowing

const blogPosts = {
    title : "a",
    body: "b",
    author: " me",
    views : 100,
    comments : [
        {author: "me1", body: "hello"},
        {author: "me2", body: "hello2"}
       
],
    isLive: true
} 

// conststructor function excercise///// - make a constructor function with blog objects.
 function blogPost(title, body, author){
    // this pointing to an ampty object adding the functions title etc..
     this.title = title;
     this.body = body;
     this.author = author;
     this.views = 0;
     this.comments = [];
     this.isLive = false;
 }

 const post = new blogPost('a','b','c');
 console.log(post);

//  price range object excercise - create an object that has 3 
// price ranges.

const priceRanges = [
    { label: '$', toolTip: 'Inexpensive', minPerson: 0, maxPerson :10},
    { label: '$$', toolTip: 'Moderate', minPerson: 11, maxPerson :20},
    { label: '$$$', toolTip: 'Inexpensive', minPerson: 21, maxPerson :50}

]

let resteraunts =[
    {averagePerPerson: 5}
]








