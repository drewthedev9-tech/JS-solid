// Inheritance

// protoype and prototypical inheritance
// every object in JS has a protyoe where it can inherit or get oher
// propeeties and fucntions from.



function Circle(radius){
    // instance members
    this.radius = radius;
}

// adding the draw method on the prototype of Circle
// protoype memebers
Circle.prototype.draw =function(){
    console.log("draw");
}


const circle= new Circle(12);
console.log(circle);

// iterating instance members
// object keys returns the instnaces of an object.
console.log(Object.keys(circle));

// returns both instances and prototypes.
for(let key in circle) console.log(key);

// excecise

// creating own prototypical inheritance

function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(shape.prototype);

Circle.prototype.draw = function(){
    console.log("draw");
}

const s = new Shape();
const  c = new Circle(1);

// Resetting the constructor////