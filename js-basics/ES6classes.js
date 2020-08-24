// casses in JS doesnt really have classes and  are basically just syntactical sugar over
// protypical inherotance THEY ARE STILL FUNCTIONS!

// same thing as below for class.
function Circle1(radius){
    this.radius = radius;

    this.draw = function(){
        console.log('draw');
    }
}

console.log(circle = new Circle1(2)); 

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
// const c = new Circle(0);

// class Circle {

// }

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
        new CircleStatic(radius);
    }
}

const circleOf = CircleStatic.parse('{"radius":1}');
console.log(circleOf);

// the this key word //////////////////////

// const Circle = function(){
//    this.draw = function(){
//        console.log(this);
//    } 
// }

// const c = new Circle();
// c.draw();

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

// /using extends off parent class Person to make new instance and inherit 
// from person class.
// super() calls the constructor of the class you "extened"!!!!!!
class BrowPerson extends Person{
    // constructor for brown person.
    constructor(color, name){
        // color is coming from parent class.
        super(color);
      
         this.name = name;
    }
}

const bernieBrown = new BrowPerson("brown", "bernie");
console.log(bernieBrown);

// exc using inheritance with call//////////////////////////

// passing a argument to a child fucntion to inherit in achild class.
// Class.call(this, call);
// The call() method calls a function with a given this value and arguments provided individually.
// call is a generic function you can use with any function!!!!!!
function Player(team){
    this.team = team;
}

function SoccerPlayer(name, team){
    // inherit color from Player.
    Player.call(this,team);
    this.name = name;
}

const newPlayer = new SoccerPlayer("jobe", "red");
console.log(newPlayer);