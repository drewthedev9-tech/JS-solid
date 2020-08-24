// casses in JS doesnt really have classes and  are basically just syntactical sugar over
// protypical inherotance THEY ARE STILL FUNCTIONS!

// same thing as below
// function Circle(){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }

// console.log(circle = new Circle(1)); 

// body of the class
class Circle {
    constructor(radius){
        // properties in class same as function constructor.
        this.radius = radius;
        // this method ends up in object instance not prototype.
        this.move = function(){
            console.log("move");
        }
    }

    // methods go here in the body of the class.
    // note they will end up on prototype to avoid this put them in constructor 
    // as above.
    draw(){
        console.log("draw");
    }
}

const c = new Circle(1);
console.log(c);

// exc sharing properties to child class /w class Syntactic sugar.

class Person {
    constructor(color){
        this.color = color
        this.walk = function(){
            console.log(" niggz be walking");
        }
    }
}

const whiteMan = new Person("white");
console.log(whiteMan);



// Hoisting ////////////

sayHello();

// function declaration. - they are raised to 
// the top of the excecution stack. THey get hoisetd.
function sayHello(){

}

// Function Expression do not get hoisted.
const sayGoodBye = function(){

}

// class declarations are nothoisted by the v8 engine.
// This wont work!
const c = new Circle(0);

class Circle {

}

// static methods ////////

class CircleStatic {
    constructor(radius){
        this.radius = radius;
    }
    // instance method
    draw(){

    }

    // static Method - are attached directly to the class not prototype.
    // used to create methods that are not tied to a specific object
    // like utility functions.
    static parse(str){
        const radius = JSON.parse(str).radius;
        new CircleStatic(radiuis);
    }
}

const circleOf = CircleStatic.parse('{"radius":1}');
console.log(circleOf);

// the this key word //////////////////////