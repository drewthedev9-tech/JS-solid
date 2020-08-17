// Inheritance

// protoype and prototypical inheritance
// every object in JS has a protyoe where it can inherit or get oher
// propeeties and fucntions from.

function Circle(radius){
    this.radius = radius;
   
   this.draw = function(){
        console.log("draw");
    }
}


const circle= new Circle(12);

console.log(circle);
