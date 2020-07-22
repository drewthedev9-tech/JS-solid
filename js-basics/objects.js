// objects - purpose is to group reltaed variables
// OOP object oriented stye in object below.
// OOP => a colletion of objects thta talk to eachother for functinality.


// dot notation
circle.draw();
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

const circle1 = createCircle(1);
console.log(circle1);

