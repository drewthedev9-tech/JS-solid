// class inheritance sharing properties and methods

class Car {
constructor(color){
this.color = color;
}
move=function(){
    console.log("I drive")
}
}

class Evo extends Car{
    constructor(speed, color){
        super(color)
        this.speed= speed
    }
    drive=function(){
        console.log(" I also drive");
    }
}

// inherits move method  and inherits color parmaeter.
const evo5 = new Evo("faster", "yellow");
console.log(evo5);

// prototype inheritance///////////////

function Shape(color){
    this.color = color;

}

// adding to the protoype of shape object
Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circlea(radius,color){
    // calls the super construtor , meaning teh this key word from shape and
    // its corresponding arg.
    Shape.call(this,color);
    this.radius = radius;
}

// adding shape to the circlea.prototype.
// this wil add the duplicate method to circlea.prototype.duplicate();
Circlea.prototype = Object.create(Shape.prototype);
// always reset constructor when inheriting form the protoype.
Circlea.prototype.constructor = Circlea;
// creating new method for Cirlcea 
Circlea.prototype.draw = function(){
    console.log("draw");
}

const s = new Shape("blue");
const  circular = new Circlea(1,"red");
console.log(circular);
console.log(s);

// call bind and apply
// Methods like call(), and apply() can refer this to any object.

// The bind() method creates a new function that, when called, has its
// this keyword set to the provided value. 
// in this example we have perName "this" being set from person.
// 

const person ={
    firstName: "Bob",
    lastName:"lee",
    speak : function(){
        fullname =  this.firstName + this.lastName;
        return fullname;
    }
}

const PersonName = function(){
    console.log(this.speak() + " is my name")
}

const personNamepseak = PersonName.bind(person);
personNamepseak(); // bob lee is my name gets it from person.

