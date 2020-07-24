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
// PAscal notation - capital letter on forst word.

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

// const circleObj ={
//     radius: 1, 
//     draw(){
//         console.log('draw');
//     }
// };

// interating over an object - for in is for objects
// for of loops are for iterating over arrays.
for (let key in circleObj){
    // bracket notationn to get the value of the property.
    console.log(key, circle[key]);
}

// way to iterate over object with for of using object.keys.
for (let key of Object.keys(circleObj))
    console.log(key);

// way to iterate over object with for of using object.entries.
for (let entry of Object.entries(circleObj))
console.log(entry);

// cloning and object////////
// usig circleObj above.

const circleObj ={
    radius: 1, 
    draw(){
        console.log('draw');
    }
};

const another = {
}

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
const message ='This is my first message';

// string object
const another = new String('hi');









