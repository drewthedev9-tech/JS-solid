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







